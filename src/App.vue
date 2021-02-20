<template>
  <ion-app v-show="isReady">
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { loadSections } from './modules/sections/section.store'

export default defineComponent({
  setup() {
    const state = {
      isReady: ref<boolean>(false),
    }

    onMounted(async () => {
      await loadSections()
      state.isReady.value = true
    })

    return {
      ...state,
    }
  },
})
</script>
