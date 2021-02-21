import { Storage } from '@capacitor/core'
import { reactive } from 'vue'
import { period } from '../time/time.store'
import { CheckState } from './check.interface'

const state = {
  states: reactive<Record<string, Record<string, CheckState>>>({}),
}

// Getters
export function getState(checkId: string, period: string): CheckState | undefined {
  if (!state.states[checkId]) {
    return
  }

  return state.states[checkId][period]
}

export function getCurrentState(checkId: string): CheckState | undefined {
  return getState(checkId, period.value)
}

export function isCheckCompleted(checkId: string): boolean {
  const state = getCurrentState(checkId)

  return state?.completed ?? false
}

// Mutations
const mutations = {
  setState(checkId: string, period: string, newState: CheckState) {
    if (!state.states[checkId]) {
      state.states[checkId] = {}
    }

    state.states[checkId][period] = newState
  },
}

// Actions
export async function loadStates() {
  try {
    const data = await Storage.get({ key: 'check-states' })
    if (data?.value) {
      const states = JSON.parse(data?.value)

      for (const id in states) {
        for (const period in states[id]) {
          mutations.setState(id, period, states[id][period])
        }
      }
    }

    console.log('states', state.states)
  } catch (error) {
    console.error(error)
  }
}

export async function setCheckCompleted(checkId: string, isCompleted: boolean) {
  console.log(checkId)
  mutations.setState(checkId, period.value, { completed: isCompleted })

  await persist()
}

/**
 * Persists all the sections in storage.
 */
async function persist() {
  const data = JSON.stringify(state.states)

  await Storage.set({ key: 'check-states', value: data })
}
