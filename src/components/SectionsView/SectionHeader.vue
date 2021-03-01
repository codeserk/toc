2<template>
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

    <ion-alert
      :is-open="isShowingDeleteAlert"
      :header="$t('section.removeAlert.title')"
      :message="$t('section.removeAlert.message', { name: section.name })"
      :buttons="alertButtons"
    />
  </ion-header>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { getSectionById, isEditing, removeSection, startEditing, stopEditing } from '@/modules/sections/section.store'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  emits: ['name-changed', 'cancel-edit', 'save'],

  props: {
    sectionId: {
      type: String,
    },
  },

  setup(props: any) {
    const { t } = useI18n()

    const state = {
      isShowingActions: ref<boolean>(false),
      isShowingDeleteAlert: ref<boolean>(false),
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
          text: t('edit'),
          role: 'destructive',
          icon: 'pencil-outline',
          handler: () => {
            actions.startEditing()
          },
        },
        {
          text: t('remove'),
          icon: 'trash-outline',
          handler: () => {
            state.isShowingDeleteAlert.value = true
          },
        },
        {
          text: t('cancel'),
          icon: 'close-outline',
          role: 'cancel',
        },
      ],

      alertButtons: [
        {
          text: t('cancel'),
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: t('remove'),
          role: 'destructive',
          cssClass: 'danger',
          handler: async () => {
            await removeSection(props.sectionId)
          },
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
