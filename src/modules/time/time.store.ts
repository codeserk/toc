import moment from 'moment'
import { computed, ref } from 'vue'
import { settings } from '../settings/settings.store'
import { Period } from './time.interface'

const state = {
  availablePeriods: ref<Record<string, Period>>({}),
  periodKey: ref<string>(getCurrentPeriod()),
}

// Getters
export const periodKey = computed(() => state.periodKey.value)
export const periodIndex = computed(() => getPeriodIndex(periodKey.value))
export const period = computed(() => state.availablePeriods.value[state.periodKey.value])
export const isCurrentPeriod = computed(() => periodKey.value === getCurrentPeriod())

export const availablePeriods = computed((): Period[] => Object.values(state.availablePeriods.value))

export function getCurrentPeriod(): string {
  return moment().format('YYYY-MM-DD')
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
}

function calculateAvailablePeriods() {
  let date = moment().subtract(settings.value.storeDays, 'days')
  const now = moment()
  while (date.isSameOrBefore(now)) {
    const period: Period = {
      key: date.format('YYYY-MM-DD'),
      date: date.toDate(),
      localized: date.format('DD/MM/YYYY'),
    }
    mutations.setAvailablePeriod(period.key, period)

    date = date.add(1, 'day')
  }
}

// Actions
export function loadPeriods() {
  calculateAvailablePeriods()

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
