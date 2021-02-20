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
  </ion-page>
</template>

<script lang="ts">
import ChecksSection from '@/components/Section.vue'
import CreateSection from '@/components/SectionsView/CreateSection.vue'
import { isEditing, sectionsSorted } from '@/modules/sections/section.store'
import 'swiper/swiper.scss'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue'

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
    }

    const getters = {
      isEditing,
      sectionsSorted,

      sliderOptions: computed((): any => ({
        speed: 400,
        allowTouchMove: !getters.isEditing.value,
      })),
    }

    const methods = {
      onSlideChanged() {
        console.log('slide changed')
      },
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
</style>
