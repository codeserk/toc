import { Storage } from '@capacitor/core'
import { reactive } from 'vue'
import { periodKey } from '../time/time.store'
import { CheckState } from './check.interface'

const state = {
  states: reactive<Record<string, Record<string, CheckState>>>({}),
}

// Getters
export function getState(checkId: string, periodKey: string): CheckState | undefined {
  if (!state.states[checkId]) {
    return
  }

  return state.states[checkId][periodKey]
}

export function getCurrentState(checkId: string): CheckState | undefined {
  return getState(checkId, periodKey.value)
}

export function isCheckCompleted(checkId: string): boolean {
  const state = getCurrentState(checkId)

  return state?.completed ?? false
}

// Mutations
const mutations = {
  setState(checkId: string, periodKey: string, newState: CheckState) {
    if (!state.states[checkId]) {
      state.states[checkId] = {}
    }

    state.states[checkId][periodKey] = newState
  },
}

// Actions
export async function loadStates() {
  try {
    const data = await Storage.get({ key: 'check-states' })
    if (data?.value) {
      const states = JSON.parse(data?.value)

      for (const id in states) {
        for (const periodKey in states[id]) {
          mutations.setState(id, periodKey, states[id][periodKey])
        }
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export async function setCheckCompleted(checkId: string, isCompleted: boolean) {
  mutations.setState(checkId, periodKey.value, { completed: isCompleted })

  await persist()
}

/**
 * Persists all the sections in storage.
 */
async function persist() {
  const data = JSON.stringify(state.states)

  await Storage.set({ key: 'check-states', value: data })
}
