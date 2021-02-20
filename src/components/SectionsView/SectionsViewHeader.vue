<template>
  <ion-header translucent>
    <ion-toolbar v-show="!isEditing">
      <ion-title v-text="section.name" />

      <ion-buttons slot="end">
        <ion-button @click="startEditing">
          <ion-icon name="pencil-outline" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-toolbar v-show="isEditing">
      <ion-buttons slot="start">
        <ion-button @click="$emit('cancel-edit')">
          Cancel
        </ion-button>
      </ion-buttons>

      <ion-input value="Test" />

      <ion-buttons slot="end">
        <ion-button @click="$emit('save')">
          <ion-icon name="save-outline" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { getSectionById, isEditing, startEditing, stopEditing } from '@/modules/sections/section.store'

export default defineComponent({
  emits: ['cancel-edit', 'save'],

  props: {
    sectionId: {
      type: String,
    },
  },

  setup(props: any) {
    const getters = {
      isEditing,
      section: computed(() => getSectionById(props.sectionId)),
    }

    const actions = {
      startEditing,
      stopEditing,
    }

    return {
      ...getters,
      ...actions,
    }
  },
})
</script>
