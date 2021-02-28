import { Storage } from '@capacitor/core'
import moment from 'moment'
import { computed, ref } from 'vue'
import { settings } from '../settings/settings.store'
import { Period, PeriodConfig } from './time.interface'

const state = {
  availablePeriods: ref<Record<string, Period>>({}),
  periodKey: ref<string>(moment().format('YYYY-MM-DD')),

  pausedAt: ref<string | undefined>(undefined),
}

// Getters
export const periodKey = computed(() => state.periodKey.value)
export const periodIndex = computed(() => getPeriodIndex(periodKey.value))
export const period = computed(() => state.availablePeriods.value[state.periodKey.value])
export const isCurrentPeriod = computed(() => periodKey.value === getCurrentPeriod())

export const availablePeriods = computed((): Period[] => Object.values(state.availablePeriods.value))

export const isPaused = computed(() => !!state.pausedAt.value)
export const pausedKey = computed(() => state.pausedAt.value)
export const pausedPeriod = computed(() =>
  pausedKey.value ? state.availablePeriods.value[pausedKey.value] : undefined,
)

export function getNowPeriod(): string {
  return moment().format('YYYY-MM-DD')
}

export function getLastDate(): moment.Moment {
  if (pausedKey.value) {
    return moment(pausedKey.value, 'YYYY-MM-DD')
  }

  return moment()
}

export function getCurrentPeriod(): string {
  return getLastDate().format('YYYY-MM-DD')
}

export function getPeriodIndex(periodKey: string): number {
  return availablePeriods.value.findIndex(period => period.key === periodKey)
}

export function hasPrevPeriod(periodKey: string): boolean {
  const index = availablePeriods.value.findIndex(period => period.key === periodKey)

  return index !== 0
}

export function hasNextPeriod(periodKey: string): boolean {
  const index = availablePeriods.value.findIndex(period => period.key === periodKey)

  return index !== availablePeriods.value.length - 1
}

// Mutations
const mutations = {
  setAvailablePeriod(key: string, period: Period) {
    state.availablePeriods.value[key] = period
  },

  setPeriod(key: string) {
    state.periodKey.value = key
  },

  setPausedAt(key?: string) {
    state.pausedAt.value = key
  },
}

function calculateAvailablePeriods() {
  let date = getLastDate()
    .clone()
    .subtract(settings.value.storeDays, 'days')
  const now = getLastDate().clone()

  while (date.isSameOrBefore(now)) {
    const key = date.format('YYYY-MM-DD')
    if (!state.availablePeriods.value[key]) {
      const period: Period = {
        key: date.format('YYYY-MM-DD'),
        date: date.toDate(),
        localized: date.format('DD/MM/YYYY'),
      }
      mutations.setAvailablePeriod(period.key, period)
    }

    date = date.add(1, 'day')
  }
}

async function loadPeriodConfigFromStorage(key: string): Promise<PeriodConfig | undefined> {
  try {
    const data = await Storage.get({ key: `period-${key}` })
    if (data?.value) {
      return JSON.parse(data?.value)
    }
  } catch (error) {
    console.error(error)
  }
}

async function loadPausedAtPeriod(): Promise<string | undefined> {
  try {
    const data = await Storage.get({ key: `paused-at-period` })
    if (data?.value) {
      return data?.value || undefined
    }
  } catch (error) {
    console.error(error)
  }
}

// Actions
export async function loadPeriods() {
  const pausedAtPeriod = await loadPausedAtPeriod()
  mutations.setPausedAt(pausedAtPeriod)
  setLastPeriod()

  calculateAvailablePeriods()
  for (const period of availablePeriods.value) {
    const config = await loadPeriodConfigFromStorage(period.key)
    if (config) {
      mutations.setAvailablePeriod(period.key, { ...period, ...config })
    }
  }

  setInterval(() => {
    calculateAvailablePeriods()
  }, 5000)
}

export function setPrevPeriod() {
  const index = periodIndex.value
  if (index > 0) {
    mutations.setPeriod(availablePeriods.value[index - 1].key)
  }
}
export function setNextPeriod() {
  const index = periodIndex.value
  if (index < availablePeriods.value.length - 1) {
    mutations.setPeriod(availablePeriods.value[index + 1].key)
  }
}

export function setLastPeriod() {
  mutations.setPeriod(getLastDate().format('YYYY-MM-DD'))
}

export async function updatePeriodConfig(key: string, config: PeriodConfig) {
  const period = state.availablePeriods.value[key]
  if (!period) {
    return
  }

  mutations.setAvailablePeriod(key, { ...period, ...config })
  await persistPeriodConfig(key, config)
}

export async function pausePeriod() {
  const pausedAt = getNowPeriod()
  mutations.setPausedAt(pausedAt)

  calculateAvailablePeriods()
  setLastPeriod()

  await persistPausedAt()
}

export async function restorePeriod() {
  const pausedAt = undefined
  mutations.setPausedAt(pausedAt)

  calculateAvailablePeriods()
  setLastPeriod()

  await persistPausedAt()
}

async function persistPeriodConfig(key: string, config: PeriodConfig) {
  const data = JSON.stringify(config)

  await Storage.set({ key: `period-${key}`, value: data })
}

async function persistPausedAt() {
  await Storage.set({ key: 'paused-at-period', value: pausedKey.value ?? '' })
}
