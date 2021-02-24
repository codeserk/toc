<template>
  <div class="check-toggle" :class="{ checked: isChecked }" @click.stop="$emit('change', !isChecked)">
    <div class="toggle"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['change'],

  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.check-toggle {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 40px;
  margin: 4px 0;
  padding: 4px;
  border-radius: 3px;
  background: lighten(#a21, 30%);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.22);

  .toggle {
    position: absolute;
    right: auto;
    left: 4px;
    width: 34px;
    height: 32px;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.22);
    transition: all 0.4s cubic-bezier(0.33, 1.6, 0.66, 1);
  }

  &.checked {
    background: #b7d076;

    .toggle {
      left: 50px;
    }
  }
}
</style>
