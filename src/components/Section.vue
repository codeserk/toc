<template>
  <div class="section" :class="{ 'period-disabled': period.isDisabled, 'section-editing': isEditing }">
    <sections-view-header
      :section-id="sectionId"
      @name-changed="name => (section.name = name)"
      @cancel-edit="cancelEdit"
      @save="save"
    />
    <ion-content>
      <ion-reorder-group :disabled="false" @ion-item-reorder="({ detail }) => onReordered(detail)">
        <ion-item
          v-for="check in sortedChecksForPeriod"
          :key="check.id"
          lines="none"
          :class="{ 'check-completed': check.isCompleted }"
        >
          <ion-reorder slot="start" v-if="isEditing">
            <ion-icon name="reorder-three-outline"></ion-icon>
          </ion-reorder>

          <ion-label v-text="check.name" v-if="!isEditing" @click="onToggleChanged(check.id, !check.isCompleted)" />
          <ion-input v-model="check.name" v-if="isEditing" />

          <input
            v-if="!isEditing"
            slot="end"
            type="checkbox"
            class="check-checkbox"
            :checked="check.isCompleted"
            @change="onToggleChanged(check.id, $event.target.checked)"
          />

          <ion-button slot="end" v-if="isEditing" fill="clear" @click="removeCheck(check.id)">
            <ion-icon slot="icon-only" name="trash-outline" size="small" color="danger" />
          </ion-button>
        </ion-item>
      </ion-reorder-group>
    </ion-content>

    <ion-item v-if="!isEditing">
      <ion-input v-model="newCheckName" placeholder="Nuevo recordatorio..." @keyup.enter="addCheck" />
      <ion-button :disabled="!isCheckNameValid" @click="addCheck" shape="round" fill="block">
        <ion-icon name="add-outline" slot="icon-only" />
      </ion-button>
    </ion-item>
  </div>
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
import { period, periodKey } from '../modules/time/time.store'

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
      periodKey,
      period,
      isEditing,
      isCheckNameValid: computed(() => !!state.newCheckName.value),

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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ion-content {
    flex: 1;
    overflow-y: auto;
    transition: opacity 0.4s ease-in-out;

    ion-item {
      ion-label {
        text-decoration: line-through;
        opacity: 1;
        transition: all 0.4s ease-in-out;
        text-decoration-color: transparent;
      }

      .check-checkbox {
        transition: opacity 0.4s ease-in-out;
      }

      &.check-completed {
        ion-label {
          opacity: 0.6;
          text-decoration-color: black;
        }
      }
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
}
</style>
