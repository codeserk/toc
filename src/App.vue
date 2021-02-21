<template>
  <ion-app v-if="isReady">
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { loadStates } from './modules/checks/check.store'
import { loadSections } from './modules/sections/section.store'
import { loadPeriods } from './modules/time/time.store'

export default defineComponent({
  setup() {
    const state = {
      isReady: ref<boolean>(false),
    }

    onMounted(async () => {
      await loadSections()
      await loadStates()
      loadPeriods()

      state.isReady.value = true
    })

    return {
      ...state,
    }
  },
})
</script>
