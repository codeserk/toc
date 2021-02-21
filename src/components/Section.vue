<template>
  <sections-view-header :section-id="sectionId" @cancel-edit="cancelEdit" @save="save" />

  <ion-content class="section">
    <ion-reorder-group :disabled="false" @ion-item-reorder="({ detail }) => onReordered(detail)">
      <ion-item v-for="check in sortedChecks" :key="check.id">
        <ion-reorder slot="start" v-if="isEditing">
          <ion-icon name="reorder-three-outline"></ion-icon>
        </ion-reorder>

        <ion-label v-text="check.name" v-if="!isEditing" />
        <ion-input v-model="check.name" v-if="isEditing" />

        <ion-checkbox
          slot="end"
          v-if="!isEditing"
          :checked="isCheckCompleted(check.id)"
          @ion-change="onToggleChanged(check.id, $event.target.checked)"
        />

        <ion-button slot="end" v-if="isEditing" fill="clear" @click="removeCheck(check.id)">
          <ion-icon slot="icon-only" name="trash-outline" size="small" color="danger" />
        </ion-button>
      </ion-item>
    </ion-reorder-group>

    <ion-item v-if="!isEditing">
      <ion-input v-model="newCheckName" placeholder="Nuevo recordatorio..." @keyup.enter="addCheck" />
      <ion-button v-text="'Add'" :disabled="!isCheckNameValid" @click="addCheck" />
    </ion-item>
  </ion-content>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import { SavedSection } from '../modules/sections/section.interface'
import {
  addCheck,
  getSectionById,
  getSectionSortedChecks,
  isEditing,
  stopEditing,
  updateSection,
} from '../modules/sections/section.store'

import SectionsViewHeader from '@/components/SectionsView/SectionsViewHeader.vue'
import { deepCopy } from '../utils/object'
import { isCheckCompleted, setCheckCompleted } from '../modules/checks/check.store'

export default defineComponent({
  components: {
    SectionsViewHeader,
  },

  props: {
    sectionId: {
      type: String,
      required: true,
    },
  },

  setup(props: any) {
    const initialSection = deepCopy(getSectionById(props.sectionId)!)

    const state = {
      originalSection: reactive<SavedSection>(initialSection!),
      section: ref<SavedSection>(initialSection!),
      newCheckName: ref<string>(''),
    }

    const getters = {
      isEditing,
      isCheckNameValid: computed(() => !!state.newCheckName.value),

      sortedChecks: computed(() => getSectionSortedChecks(state.section.value)),
    }

    const methods = {
      isCheckCompleted,

      onReordered(detail: any) {
        const { from, to } = detail
        const checks = getters.sortedChecks.value
        state.section.value.checks[checks[from].id].position = to

        if (from < to) {
          for (let position = from + 1; position <= to; position++) {
            state.section.value.checks[checks[position].id].position--
          }
        } else if (to < from) {
          for (let position = to; position < from; position++) {
            state.section.value.checks[checks[position].id].position++
          }
        }

        detail.complete(true)
      },

      async onToggleChanged(checkId: string, isCompleted: boolean) {
        await setCheckCompleted(checkId, isCompleted)
      },

      async addCheck() {
        if (!getters.isCheckNameValid.value) {
          return
        }

        await addCheck(props.sectionId, state.newCheckName.value)
        state.section.value = deepCopy(getSectionById(props.sectionId)!)

        state.newCheckName.value = ''
      },

      removeCheck(id: string) {
        delete state.section.value.checks[id]
      },

      cancelEdit() {
        state.section.value = deepCopy(getSectionById(props.sectionId)!)
        stopEditing()
      },

      async save() {
        await updateSection(state.section.value)
        stopEditing()
      },
    }

    return { ...state, ...getters, ...methods }
  },
})
</script>

<style lang="scss" scoped>
.section {
  overflow-y: scroll;
  width: 100%;
  height: 100%;
}
</style>
