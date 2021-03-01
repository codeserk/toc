<template>
  <div class="sticker-container" :class="{ 'sticker-not-animated': !animated }">
    <img class="sticker" :src="sticker" />

    <div class="effect-5 effect">
      <div class="rhombus-5">
        <div class="rhombus-4">
          <div class="rhombus-3">
            <div class="rhombus-2">
              <div class="rhombus-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="effect-6 effect">
      <div class="circle">
        <div class="circle-element-1"></div>
      </div>
      <div class="line-wrapper line-wrapper-1">
        <span class="line line-1"></span>
      </div>
      <div class="rotate60">
        <div class="line-wrapper line-wrapper-2">
          <span class="line line-2"></span>
        </div>
      </div>
      <div class="rotate120">
        <div class="line-wrapper line-wrapper-3">
          <span class="line line-3"></span>
        </div>
      </div>
      <div class="line-wrapper line-wrapper-4">
        <span class="line line-4"></span>
      </div>
      <div class="rotate-120">
        <div class="line-wrapper line-wrapper-5">
          <span class="line line-5"></span>
        </div>
      </div>
      <div class="rotate-60">
        <div class="line-wrapper line-wrapper-6">
          <span class="line line-6"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    animated: {
      type: Boolean,
      default: false,
    },

    sticker: {
      type: String,
    },
  },
})
</script>

<style lang="scss" scoped>
@keyframes rhombus {
  0% {
    opacity: 1;
    transform: scale3d(0, 0, 1);
  }
  100% {
    opacity: 1;
    transform: scale3d(10, 10, 1);
  }
}

@keyframes effect-6_circle {
  0% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
  100% {
    opacity: 0;
    transform: scale3d(1.4, 1.4, 1);
  }
}

@keyframes effect-6_circle-element-1 {
  0% {
    opacity: 1;
    transform: scale3d(0, 0, 1);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

@keyframes effect-6_line-wrapper-1 {
  0% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
    transform-origin: top;
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 0, 1);
    transform-origin: top;
  }
}

@keyframes effect-6_line-1 {
  0% {
    opacity: 1;
    transform: scale3d(1, 0, 1);
    transform-origin: bottom;
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
    transform-origin: bottom;
  }
}

@keyframes effect-6_line-wrapper-2 {
  0% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
    transform-origin: bottom;
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 0, 1);
    transform-origin: bottom;
  }
}

@keyframes effect-6_line-2 {
  0% {
    opacity: 1;
    transform: scale3d(1, 0, 1);
    transform-origin: top;
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
    transform-origin: top;
  }
}

@keyframes animation-sticker {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) rotateZ(15deg) scale3d((0.1, 0.1, 0.1));
  }
  100% {
    opacity: 1;
    transform: translate3d(-50%, -50%, 0) rotateZ(0deg) scale3d((1, 1, 1));
  }
}

.sticker-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;

  .sticker {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1;
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
    animation: animation-sticker 0.5s cubic-bezier(0.33, 1.6, 0.66, 1) forwards;
  }

  &.sticker-not-animated {
    .sticker {
      animation-delay: 0s;
    }

    .effect-5 * {
      animation-delay: 0s;
    }
    .effect-6 * {
      animation-delay: 0s;
    }
  }
}

/* ===================
effect-5
==================== */

.effect-5 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
}

.rhombus-5 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: rhombus 0.7s ease-in forwards;
}

.rhombus-4 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50vw;
  height: 50vw;
  background-color: #ef5958;
  transform: translate(-50%, -50%) rotate(45deg);
}

.rhombus-3 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 37.5vw;
  height: 37.5vw;
  background-color: #77ceb9;
  transform: translate(-50%, -50%);
}

.rhombus-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25vw;
  height: 25vw;
  background-color: #ffe08b;
  transform: translate(-50%, -50%);
}

.rhombus-1 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12.25vw;
  height: 12.25vw;
  background-color: #f2f3df;
  transform: translate(-50%, -50%);
}

/* ===================
effect-6
==================== */

.effect-6 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10vw;
  height: 10vw;
  transform: translate(-50%, -50%);
}

.effect-6 .circle {
  position: absolute;
  top: -0.2vw;
  left: -0.2vw;
  width: 10vw;
  height: 10vw;
  transform-origin: center;
  animation: effect-6_circle 0.2s ease-in 0.1s forwards;
}

.effect-6 .circle-element-1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 10vw;
  height: 10vw;
  border: 0.2vw solid #a18a66;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0;
  transform-origin: center;
  animation: effect-6_circle-element-1 0.2s ease-in 0.1s forwards;
}

.effect-6 .line-wrapper {
  position: absolute;
  opacity: 0;
}

.effect-6 .line {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #a18a66;
}

/* ===========
line-1
=========== */

.effect-6 .line-wrapper-1 {
  top: -95%;
  left: 45%;
  width: 10%;
  height: 60%;
  animation: effect-6_line-wrapper-1 0.5s ease-in 0.1s forwards;
}

.effect-6 .line-1 {
  animation: effect-6_line-1 0.5s ease-in 0.6s forwards;
}

/* ===========
line-2
=========== */

.effect-6 .rotate60 {
  position: absolute;
  top: 22.5%;
  left: 33%;
  display: block;
  width: 100%;
  height: 100%;
  transform: rotate(60deg);
}

.effect-6 .line-wrapper-2 {
  top: -78%;
  left: 10%;
  width: 10%;
  height: 60%;
  animation: effect-6_line-wrapper-1 0.5s ease-in 0.1s forwards;
}

.effect-6 .line-2 {
  animation: effect-6_line-1 0.5s ease-in 0.6s forwards;
}

/* ===========
line-3
=========== */

.effect-6 .rotate120 {
  position: absolute;
  top: 36.5%;
  left: 0%;
  display: block;
  width: 100%;
  height: 100%;
  transform: rotate(120deg);
}

.effect-6 .line-wrapper-3 {
  top: -78%;
  left: 10%;
  width: 10%;
  height: 60%;
  animation: effect-6_line-wrapper-1 0.5s ease-in 0.1s forwards;
}

.effect-6 .line-3 {
  animation: effect-6_line-1 0.5s ease-in 0.6s forwards;
}

/* ===========
line-4
=========== */

.effect-6 .line-wrapper-4 {
  top: 140%;
  left: 45%;
  width: 10%;
  height: 60%;
  animation: effect-6_line-wrapper-2 0.5s ease-in 0.1s forwards;
}

.effect-6 .line-4 {
  animation: effect-6_line-2 0.5s ease-in 0.6s forwards;
}

/* ===========
line-5
=========== */

.effect-6 .rotate-120 {
  position: absolute;
  top: -15.5%;
  left: -34%;
  display: block;
  width: 100%;
  height: 100%;
  transform: rotate(-120deg);
}

.effect-6 .line-wrapper-5 {
  top: -78%;
  left: 10%;
  width: 10%;
  height: 60%;
  animation: effect-6_line-wrapper-1 0.5s ease-in 0.1s forwards;
}

.effect-6 .line-5 {
  animation: effect-6_line-1 0.5s ease-in 0.6s forwards;
}

/* ===========
line-6
=========== */

.effect-6 .rotate-60 {
  position: absolute;
  top: -34.5%;
  left: -3%;
  display: block;
  width: 100%;
  height: 100%;
  transform: rotate(-60deg);
}

.effect-6 .line-wrapper-6 {
  top: -78%;
  left: 10%;
  width: 10%;
  height: 60%;
  animation: effect-6_line-wrapper-1 0.5s ease-in 0.1s forwards;
}

.effect-6 .line-6 {
  animation: effect-6_line-1 0.5s ease-in 0.6s forwards;
}

@media screen and (max-width: 750px) {
  /* ===================
    effect-5
==================== */
  @keyframes rhombus {
    0% {
      opacity: 1;
      transform: scale3d(0, 0, 1);
    }
    100% {
      opacity: 1;
      transform: scale3d(20, 20, 1);
    }
  }

  /* ==============
  green circle
============== */
  .color-green-1 {
    width: 70vw;
    height: 70vw;
  }
  .color-green-1::before {
    left: 35vw;
    width: 70vw;
    height: 70vw;
    transform-origin: left 35vw;
  }
  .color-green-1::after {
    left: -35vw;
    width: 70vw;
    height: 70vw;
    transform-origin: right 35vw;
  }

  /* ==============
  navy circle
============== */
  .color-navy-1 {
    width: 50vw;
    height: 50vw;
  }
  .color-navy-1::before {
    left: 25vw;
    width: 50vw;
    height: 50vw;
    transform-origin: left 25vw;
  }
  .color-navy-1::after {
    left: -25vw;
    width: 50vw;
    height: 50vw;
    transform-origin: right 25vw;
  }

  /* ==============
  yellow circle
============== */
  .color-yellow-1 {
    width: 35vw;
    height: 35vw;
  }
  .color-yellow-1::before {
    left: 17.5vw;
    width: 35vw;
    height: 35vw;
    transform-origin: left 17.5vw;
  }
  .color-yellow-1::after {
    left: -17.5vw;
    width: 35vw;
    height: 35vw;
    transform-origin: right 17.5vw;
  }

  /* ==============
blue circle
============== */
  .blue01 {
    width: 20vw;
    height: 20vw;
  }
  .blue01::before {
    left: 10vw;
    width: 20vw;
    height: 20vw;
    transform-origin: left 10vw;
  }
  .blue01::after {
    left: -10vw;
    width: 20vw;
    height: 20vw;
    transform-origin: right 10vw;
  }
  .blue00 {
    width: 7vw;
    height: 7vw;
  }

  /* ==============
red circle
============== */
  .red00 {
    width: 6vw;
    height: 6vw;
  }
}
</style>
