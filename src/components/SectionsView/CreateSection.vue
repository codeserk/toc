<template>
  <ion-content class="create-section">
    <h1 class="ion-text-center">New section</h1>

    <ion-item>
      <ion-input v-model="name" placeholder="Section name" />
    </ion-item>
    <ion-item>
      <ion-button :disabled="!isValid" @click="createSection">Create</ion-button>
    </ion-item>
  </ion-content>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { addSection } from '@/modules/sections/section.store'

export default defineComponent({
  setup() {
    const state = {
      name: ref<string>(''),
    }

    const getters = {
      isValid: computed((): boolean => !!state.name.value),
    }

    const actions = {
      createSection() {
        if (!getters.isValid) {
          return
        }

        addSection(state.name.value)
      },
    }

    return {
      ...state,
      ...getters,
      ...actions,
    }
  },
})
</script>

<style lang="scss" scoped>
.create-section {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
