<template>
  <ion-item
    lines="none"
    class="ion-activatable"
    :class="{ 'check-completed': check.isCompleted, 'check-editing': isEditing }"
    @click="!isEditing && onToggleChanged(check.id, !check.isCompleted)"
  >
    <ion-ripple-effect v-if="!isEditing" />
    <ion-reorder slot="start" v-if="isEditing">
      <ion-icon name="reorder-three-outline"></ion-icon>
    </ion-reorder>

    <ion-label v-text="check.name" v-if="!isEditing" />
    <ion-input :value="check.name" @input="$emit('name-changed', $event.target.value)" v-if="isEditing" />

    <check-toggle
      slot="end"
      v-if="!isEditing"
      :is-checked="check.isCompleted"
      @change="isChecked => onToggleChanged(check.id, isChecked)"
    />

    <ion-button slot="end" v-if="isEditing" fill="clear" @click="$emit('remove')">
      <ion-icon slot="icon-only" name="trash-outline" size="small" color="danger" />
    </ion-button>
  </ion-item>
</template>

<script lang="ts">
import { setCheckCompleted } from '@/modules/checks/check.store'
import { defineComponent } from 'vue'
import CheckToggle from './Check/CheckToggle.vue'

export default defineComponent({
  components: {
    CheckToggle,
  },

  emits: ['name-changed', 'remove'],

  props: {
    isEditing: {
      type: Boolean,
      default: false,
    },

    check: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props: any) {
    const methods = {
      async onToggleChanged(checkId: string, isCompleted: boolean) {
        console.log(isCompleted)
        if (props.isEditing) {
          return
        }

        await setCheckCompleted(checkId, isCompleted)
      },
    }

    return { ...methods }
  },
})
</script>

<style lang="scss" scoped>
ion-item {
  --padding-start: 0;
  --ripple-color: red;

  ion-label {
    padding-left: 12px;
    text-decoration: line-through;
    opacity: 1;
    transition: all 0.4s ease-in-out;
    text-decoration-color: transparent;
  }

  ion-reorder {
    margin-right: 12px;
    padding-left: 12px;
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

  &.check-editing {
    ion-label {
      padding-left: 0;
    }
  }
}
</style>
