<template>
  <div
    class="section"
    :class="{
      'section-editing': isEditing,
      'section-completed': isCompleted,
      'section-animating': isShowingAnimation,
    }"
  >
    <section-header
      :section-id="sectionId"
      @name-changed="name => (section.name = name)"
      @cancel-edit="cancelEdit"
      @save="save"
    />
    <ion-content>
      <sticker v-if="isCompleted" :animated="isShowingAnimation" :sticker="stickerAssigned" />

      <ion-reorder-group :disabled="false" @ion-item-reorder="({ detail }) => onReordered(detail)">
        <check
          v-for="check in sortedChecksForPeriod"
          :key="check.id"
          :is-editing="isEditing"
          :check="check"
          @name-changed="newName => updateCheckName(check.id, newName)"
          @remove="removeCheck(check.id)"
        />
      </ion-reorder-group>
    </ion-content>

    <ion-item v-if="!isEditing">
      <ion-input v-model="newCheckName" :placeholder="$t('section.newCheck')" @keyup.enter="addCheck" />
      <ion-button :disabled="!isCheckNameValid" @click="addCheck" shape="round" fill="block">
        <ion-icon name="add-outline" slot="icon-only" />
      </ion-button>
    </ion-item>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from 'vue'
import { SavedSection } from '../modules/sections/section.interface'
import {
  addCheck,
  assignSticker,
  getSectionById,
  getSectionSortedChecks,
  getStickerAssigned,
  isEditing,
  isSectionCompleted,
  stopEditing,
  updateSection,
} from '../modules/sections/section.store'

import SectionHeader from '@/components/SectionsView/SectionHeader.vue'
import Sticker from '@/components/SectionsView/Sticker.vue'

import { deepCopy } from '../utils/object'
import { isCheckCompleted } from '../modules/checks/check.store'
import { period, periodKey } from '../modules/time/time.store'
import Check from './Check.vue'

export default defineComponent({
  components: {
    Sticker,
    SectionHeader,
    Check,
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

      isShowingAnimation: ref<boolean>(false),
    }

    const getters = {
      periodKey,
      period,
      isEditing,
      isCheckNameValid: computed(() => !!state.newCheckName.value),
      isCompleted: computed(() => isSectionCompleted(props.sectionId)),
      stickerAssigned: computed(() => getStickerAssigned(props.sectionId)),

      sortedChecks: computed(() => getSectionSortedChecks(state.section.value)),

      sortedChecksForPeriod: computed(() =>
        getters.sortedChecks.value.map(check => ({
          ...check,
          isCompleted: isCheckCompleted(check.id),
        })),
      ),
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

      updateCheckName(checkId: string, name: string) {
        if (!state.section.value?.checks[checkId]) {
          return
        }

        state.section.value.checks[checkId].name = name
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

    watch(getters.isCompleted, async (isCompleted: boolean) => {
      if (isCompleted && !getters.stickerAssigned.value) {
        await assignSticker(props.sectionId)
        state.isShowingAnimation.value = true

        await new Promise(resolve => setTimeout(resolve, 3000))
        state.isShowingAnimation.value = false
      }
    })

    return { ...state, ...getters, ...methods }
  },
})
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
  height: 100%;

  ion-content {
    --background: #fff;

    flex: 1;
    overflow-x: hidden !important;
    overflow-y: auto;
    transition: opacity 0.4s ease-in-out;

    ion-item {
      --background: #fffa;

      transition: opacity 0.4s ease-in-out;
    }
  }
  ion-header {
    flex: 0;
  }

  &.period-disabled {
    ion-content {
      opacity: 0.5;

      ion-item {
        pointer-events: none;

        .check-checkbox {
          opacity: 0;
        }
      }
    }

    &.section-editing {
      ion-content {
        opacity: 1;
      }
    }
  }

  &.section-animating {
    ion-item {
      opacity: 0;
    }
  }
}
</style>
