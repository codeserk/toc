<template>
  <div class="create-section">
    <ion-icon class="main-icon" name="folder-open-outline" size="large" />
    <h1 v-t="'section.new.title'" />
    <h2 v-t="'section.new.subtitle'" />

    <ion-item>
      <ion-label slot="start" v-t="'section.new.fields.name.label'" />
      <ion-input v-model="name" :placeholder="$t('section.new.fields.name.placeholder')" @keyup.enter="createSection" />
      <ion-button slot="end" :disabled="!isValid" @click="createSection" shape="round" fill="block">
        <ion-icon name="add-outline" slot="icon-only" />
      </ion-button>
    </ion-item>
  </div>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1em 2em;
  text-align: center;

  ion-icon.main-icon {
    width: 30vw;
    height: 30vw;
  }

  ion-item {
    --padding-start: 0;
    --inner-padding-end: 0;

    width: 100%;
    margin-top: 2em;
  }

  h2 {
    padding: 0 1em;
    color: #999;
    font-size: 1.25em;
  }
}
</style>
