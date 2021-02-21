<template>
  <ion-app v-if="isReady">
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { loadStates } from './modules/checks/check.store'
import { loadSections } from './modules/sections/section.store'

export default defineComponent({
  setup() {
    const state = {
      isReady: ref<boolean>(false),
    }

    onMounted(async () => {
      await loadSections()
      await loadStates()

      state.isReady.value = true
    })

    return {
      ...state,
    }
  },
})
</script>
