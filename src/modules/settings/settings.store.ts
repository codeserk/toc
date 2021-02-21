import { computed, ref } from 'vue'
import { Settings } from './settings.interface'

const state = {
  settings: ref<Settings>({
    storeDays: 2,
  }),
}

// Getters
export const settings = computed(() => state.settings.value)
