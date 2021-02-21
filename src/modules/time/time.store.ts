import moment from 'moment'
import { computed, ref } from 'vue'

const state = {
  period: ref<string>(getCurrentPeriod()),
}

// Getters
export const period = computed(() => state.period.value)

// Actions
function getCurrentPeriod(): string {
  const date = moment()
  if (date.hour() < 4) {
    date.subtract(1, 'day')
  }

  return date.format('YYYY-MM-DD')
}

setInterval(() => {
  state.period.value = getCurrentPeriod()
}, 5000)
