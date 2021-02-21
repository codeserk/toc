<template>
  <ion-header translucent>
    <ion-toolbar v-show="!isEditing">
      <ion-title v-text="section.name" />

      <ion-buttons slot="end">
        <ion-button @click="isShowingActions = true">
          <ion-icon name="ellipsis-vertical" slot="icon-only" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-toolbar v-show="isEditing">
      <ion-buttons slot="start">
        <ion-button @click="$emit('cancel-edit')">
          <ion-icon name="close-outline" slot="icon-only" />
        </ion-button>
      </ion-buttons>

      <ion-title>
        <ion-input :value="section.name" @input="$emit('name-changed', $event.target.value)" />
      </ion-title>

      <ion-buttons slot="end">
        <ion-button @click="$emit('save')">
          <ion-icon name="save-outline" slot="icon-only" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>

    <ion-action-sheet
      :is-open="isShowingActions"
      :header="section.name"
      :buttons="buttons"
      translucent
      @on-did-dismiss="isShowingActions = false"
    />
  </ion-header>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { getSectionById, isEditing, startEditing, stopEditing } from '@/modules/sections/section.store'

export default defineComponent({
  emits: ['name-changed', 'cancel-edit', 'save'],

  props: {
    sectionId: {
      type: String,
    },
  },

  setup(props: any) {
    const state = {
      isShowingActions: ref<boolean>(false),
    }

    const getters = {
      isEditing,
      section: computed(() => getSectionById(props.sectionId)),
    }

    const actions = {
      startEditing,
      stopEditing,
    }

    const constants = {
      buttons: [
        {
          text: 'Edit',
          role: 'destructive',
          icon: 'pencil-outline',
          handler: () => {
            actions.startEditing()
          },
        },
        {
          text: 'Delete',
          icon: 'trash-outline',
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
        },
      ],
    }

    return {
      ...constants,
      ...state,
      ...getters,
      ...actions,
    }
  },
})
</script>
