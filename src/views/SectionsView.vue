<template>
  <ion-page>
    <ion-content fullscreen>
      <swiper id="slider" :space-between="0" :speed="400" class="slider">
        <swiper-slide v-for="section in sectionsSorted" :key="section.id">
          <checks-section :section-id="section.id" />
        </swiper-slide>

        <swiper-slide>
          <create-section />
        </swiper-slide>
      </swiper>
    </ion-content>

    <ion-footer class="sections-header" :class="{ 'period-disabled': period.isDisabled }">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="setPrevPeriod" :disabled="!hasPrevPeriod">
            <ion-icon slot="icon-only" name="chevron-back" />
          </ion-button>
          <ion-button @click="setNextPeriod" :disabled="!hasNextPeriod">
            <ion-icon slot="icon-only" name="chevron-forward" />
          </ion-button>
        </ion-buttons>

        <ion-title class="header-title" @click="isShowingActions = true">
          <span v-text="period.localized" />
          <ion-badge v-text="isCurrentPeriod ? 'Hoy' : ''" />
        </ion-title>

        <ion-buttons slot="end">
          <ion-button>
            <ion-icon name="cog" slot="icon-only" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>

    <ion-action-sheet
      :is-open="isShowingActions"
      :header="period.localized"
      css-class="actions"
      :buttons="actions"
      translucent
      @on-did-dismiss="isShowingActions = false"
    />
  </ion-page>
</template>

<script lang="ts">
import ChecksSection from '@/components/Section.vue'
import CreateSection from '@/components/SectionsView/CreateSection.vue'
import { isEditing, sectionsSorted } from '@/modules/sections/section.store'
import 'swiper/swiper.scss'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import {
  availablePeriods,
  hasNextPeriod,
  hasPrevPeriod,
  isCurrentPeriod,
  period,
  periodKey,
  setNextPeriod,
  setPrevPeriod,
  updatePeriodConfig,
} from '../modules/time/time.store'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,

    ChecksSection,
    CreateSection,
  },

  setup() {
    const state = {
      slider: ref<any>(null),
      isShowingActions: ref<boolean>(false),
    }

    const getters = {
      isEditing,
      sectionsSorted,
      availablePeriods,
      period,
      isCurrentPeriod,

      hasPrevPeriod: computed(() => hasPrevPeriod(periodKey.value)),
      hasNextPeriod: computed(() => hasNextPeriod(periodKey.value)),

      sliderOptions: computed((): any => ({
        speed: 400,
        allowTouchMove: !getters.isEditing.value,
      })),

      actions: computed(() => [
        {
          text: getters.period.value.isDisabled ? 'Enable' : 'Disable',
          icon: getters.period.value.isDisabled ? 'flash-outline' : 'flash-off-outline',
          role: 'destructive',
          handler: () => {
            state.isShowingActions.value = false

            nextTick(() =>
              updatePeriodConfig(getters.period.value.key, { isDisabled: !getters.period.value.isDisabled }),
            )
          },
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            state.isShowingActions.value = false
          },
        },
      ]),
    }

    const methods = {
      setPrevPeriod,
      setNextPeriod,
    }

    onMounted(() => {
      setTimeout(() => {
        const elm: any = document.getElementById('slider')
        nextTick(() => {
          elm.swiper.update()
        })
      }, 500)
    })

    watch(getters.isEditing, (isEditing: boolean) => {
      const elm: any = document.getElementById('slider')
      elm.swiper.allowTouchMove = !isEditing
    })

    return {
      ...state,
      ...getters,
      ...methods,
    }
  },
})
</script>

<style lang="scss" scoped>
.slider {
  height: 100%;

  ion-slide {
    // align-items: flex-start;
    // width: 100%;
    height: 100%;
  }
}

.sections-header {
  overflow: unset;
  &::after {
    content: none;
  }

  .header-title {
    position: relative;
    margin-right: 20px;
    text-align: center;

    ion-badge {
      position: absolute;
      top: -5px;
      padding: 0.5em 0.5em 0.25em 0.5em;
      font-size: 10px;
    }
  }

  &.period-disabled {
    .header-title {
      text-decoration: line-through;
    }
  }
}
</style>
