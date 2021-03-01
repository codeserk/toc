<template>
  <ion-item
    lines="none"
    class="ion-activatable"
    :class="{ 'check-completed': check.isCompleted, 'check-editing': isEditing }"
    @click="!isEditing && onToggleChanged(check.id, !check.isCompleted)"
  >
    <ion-ripple-effect v-if="!isEditing" />

    <transition name="reorder">
      <ion-reorder slot="start" v-if="isEditing" />
    </transition>

    <ion-label v-text="check.name" v-if="!isEditing" />
    <ion-input :value="check.name" @input="$emit('name-changed', $event.target.value)" v-if="isEditing" />

    <transition name="slide-fade">
      <check-toggle
        slot="end"
        v-if="!isEditing"
        key="check-toggle"
        :is-checked="check.isCompleted"
        @change="isChecked => onToggleChanged(check.id, isChecked)"
      />
    </transition>

    <transition name="slide-fade">
      <ion-button
        slot="end"
        v-if="isEditing"
        key="remove-button"
        class="remove-button"
        shape="round"
        fill="block"
        @click="$emit('remove')"
      >
        <ion-icon slot="icon-only" name="trash-outline" color="danger" />
      </ion-button>
    </transition>
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
    width: 43px;
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

.reorder-enter-active,
.reorder-leave-active {
  transition: all 0.4s ease-in-out;
}

.reorder-enter-from,
.reorder-leave-to {
  width: 0;
  margin: 0;
  padding-left: 0;
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  display: none;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
