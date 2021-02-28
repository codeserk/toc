<template>
  <div class="sticker-container" :class="{ 'sticker-not-animated': !animated }">
    <img class="sticker" :src="sticker" />

    <div v-if="animated" class="effect-1 effect">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div v-if="animated" class="effect-2 effect">
      <div></div>
      <div></div>
    </div>

    <div v-if="animated" class="effect-3 effect">
      <div class="line-wrapper line-wrapper-1">
        <span class="line line-1"></span>
      </div>
      <div class="rotate45">
        <div class="line-wrapper line-wrapper-2">
          <span class="line line-2"></span>
        </div>
      </div>
      <div class="line-wrapper line-wrapper-3">
        <span class="line line-3"></span>
      </div>
      <div class="rotate135">
        <div class="line-wrapper line-wrapper-4">
          <span class="line line-4"></span>
        </div>
      </div>
      <div class="line-wrapper line-wrapper-5">
        <span class="line line-5"></span>
      </div>
      <div class="rotate-135">
        <div class="line-wrapper line-wrapper-6">
          <span class="line line-6"></span>
        </div>
      </div>
      <div class="line-wrapper line-wrapper-7">
        <span class="line line-7"></span>
      </div>
      <div class="rotate-45">
        <div class="line-wrapper line-wrapper-8">
          <span class="line line-8"></span>
        </div>
      </div>
    </div>

    <div v-if="animated" class="effect-4 effect">
      <div class="double-wrapper-2 color-green-2">
        <div class="double-wrapper-1 color-green-1">
          <div class="double-block color-green-0"></div>
        </div>
      </div>
      <div class="double-wrapper-2 color-navy-2">
        <div class="double-wrapper-1 color-navy-1">
          <div class="double-block color-navy-0"></div>
        </div>
      </div>
      <div class="double-wrapper-2 color-yellow-2">
        <div class="double-wrapper-1 color-yellow-1">
          <div class="double-block color-yellow-0"></div>
        </div>
      </div>
      <div class="double-wrapper-2 color-blue-2">
        <div class="double-wrapper-1 color-blue-1">
          <div class="double-block color-blue-0"></div>
        </div>
      </div>
      <div class="double-wrapper-2 color-red-2">
        <div class="double-wrapper-1 color-red-1">
          <div class="double-block color-red-0"></div>
        </div>
      </div>
    </div>

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
@keyframes effect-1 {
  0% {
    opacity: 1;
    transform: scale3d(1, 0, 1);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

@keyframes effect-2 {
  0% {
    opacity: 1;
    transform: scale3d(0, 0, 1);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

@keyframes animation03_circle {
  0% {
    opacity: 1;
    transform: scale3d(0, 0, 1);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

@keyframes animation03_circle-element-1 {
  0% {
    border: 0.25vw solid #54988b;
  }
  100% {
    border: 0 solid #54988b;
  }
}

@keyframes animation03_circle-element-2 {
  0% {
    border: 0.5vw solid #4b5e58;
  }
  100% {
    border: 0 solid #4b5e58;
  }
}

@keyframes animation03_circle-element-3 {
  0% {
    border: 1vw solid #404a52;
  }
  100% {
    border: 0 solid #404a52;
  }
}

@keyframes effect-3_line-wrapper-1 {
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

@keyframes effect-3_line-1 {
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

@keyframes effect-3_line-wrapper-2 {
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

@keyframes effect-3_line-2 {
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

@keyframes effect-3_line-wrapper-3 {
  0% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
    transform-origin: right;
  }
  100% {
    opacity: 1;
    transform: scale3d(0, 1, 1);
    transform-origin: right;
  }
}

@keyframes effect-3_line-3 {
  0% {
    opacity: 1;
    transform: scale3d(0, 1, 1);
    transform-origin: left;
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
    transform-origin: left;
  }
}

@keyframes effect-3_line-wrapper-4 {
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

@keyframes effect-3_line-4 {
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

@keyframes effect-3_line-wrapper-5 {
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

@keyframes effect-3_line-5 {
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

@keyframes effect-3_line-wrapper-6 {
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

@keyframes effect-3_line-6 {
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

@keyframes effect-3_line-wrapper-7 {
  0% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
    transform-origin: left;
  }
  100% {
    opacity: 1;
    transform: scale3d(0, 1, 1);
    transform-origin: left;
  }
}

@keyframes effect-3_line-7 {
  0% {
    opacity: 1;
    transform: scale3d(0, 1, 1);
    transform-origin: right;
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
    transform-origin: right;
  }
}

@keyframes effect-3_line-wrapper-8 {
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

@keyframes effect-3_line-8 {
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

@keyframes effect-4_double {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes rotate-circle-left {
  0% {
    background: #f2f3df;
    transform: rotate(0deg);
  }
  50% {
    background: #f2f3df;
    transform: rotate(-180deg);
  }
  50.01% {
    background: #f2f3df;
    transform: rotate(-180deg);
  }
  100% {
    background: #f2f3df;
    transform: rotate(-360deg);
  }
}

@keyframes rotate-circle-right {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

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

@keyframes animation08 {
  0% {
    opacity: 1;
    transform: translateY(-200vh);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
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
    animation-delay: 2.6s;
  }

  &.sticker-not-animated {
    .sticker {
      animation-delay: 0.5s;
    }

    .effect-5 * {
      animation-delay: 0s;
    }
    .effect-6 * {
      animation-delay: 0s;
    }
  }
}

.front {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
}

/* ===================
effect-1
==================== */

.effect-1 {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.effect-1 div {
  flex: 1;
  height: 100%;
  border: none;
  opacity: 0;
  transform-origin: bottom;
  animation: effect-1 0.275s ease-in forwards;
}

.effect-1 div:nth-child(1) {
  background-color: #d55959;
  animation-delay: 0.4s;
}

.effect-1 div:nth-child(2) {
  background-color: #ffe08b;
  animation-delay: 0.3s;
}

.effect-1 div:nth-child(3) {
  background-color: #75cfb9;
  animation-delay: 0.2s;
}

.effect-1 div:nth-child(4) {
  background-color: #f1a05b;
  animation-delay: 0.1s;
}

.effect-1 div:nth-child(5) {
  background-color: #78bee4;
}

/* ===================
effect-2
==================== */

.effect-2 {
  position: absolute;
  width: 100%;
  height: 100%;
}

.effect-2 div {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  animation: effect-2 0.6s ease-in 0.6s forwards;
}

.effect-2 div:nth-child(1) {
  top: 0;
  left: 0;
  border-top: 100vh solid transparent;
  border-right: 100vw solid #f2f3df;
  transform-origin: bottom right;
}

.effect-2 div:nth-child(2) {
  right: 0;
  bottom: 0;
  border-bottom: 100vh solid transparent;
  border-left: 100vw solid #f2f3df;
  transform-origin: top left;
}

/* ===================
animation03
==================== */

.animation03 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 13vw;
  height: 13vw;
  transform: translate(-50%, -50%);
}

.animation03 .circle {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9998;
  background-color: transparent;
  transform: translate(-50%, -50%);
  transform-origin: center;
}

.animation03 .circle-element-1 {
  width: 13vw;
  height: 13vw;
  border: 0.25vw solid #54988b;
  border-radius: 50%;
  opacity: 0;
  animation: animation03_circle 0.3s ease-in-out 0.5s forwards, animation03_circle-element-1 0.3s linear 0.9s forwards;
}

.animation03 .circle-element-2 {
  width: 9vw;
  height: 9vw;
  border: 0.5vw solid #4b5e58;
  border-radius: 50%;
  opacity: 0;
  animation: animation03_circle 0.4s ease-in-out 0.5s forwards, animation03_circle-element-2 0.2s linear 1s forwards;
}

.animation03 .circle-element-3 {
  width: 4vw;
  height: 4vw;
  border: 1vw solid #404a52;
  border-radius: 50%;
  opacity: 0;
  animation: animation03_circle 0.45s ease-in-out 0.5s forwards, animation03_circle-element-3 0.15s linear 1.4s forwards;
}

/* ===================
effect-3
==================== */

.effect-3 {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9999;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
}

.effect-3 .line-wrapper {
  position: absolute;
  opacity: 0;
}

.effect-3 .line {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0;
}

/* ===========
line-1
=========== */

.effect-3 .line-wrapper-1 {
  top: -20%;
  left: 50%;
  width: 2.5%;
  height: 30%;
  animation: effect-3_line-wrapper-1 0.45s ease-in 0.8s forwards;
}

.effect-3 .line-1 {
  animation: effect-3_line-1 0.45s ease-in 0.5s forwards;
}

/* ===========
line-2
=========== */

.effect-3 .rotate45 {
  position: absolute;
  top: 22.5%;
  left: 50%;
  display: block;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}

.effect-3 .line-wrapper-2 {
  width: 2.5%;
  height: 30%;
  animation: effect-3_line-wrapper-2 0.45s ease-in 0.8s forwards;
}

.effect-3 .line-2 {
  animation: effect-3_line-2 0.45s ease-in 0.5s forwards;
}

/* ===========
line-3
=========== */

.effect-3 .line-wrapper-3 {
  top: 50%;
  left: 90%;
  width: 30%;
  height: 2.5%;
  animation: effect-3_line-wrapper-3 0.45s ease-in 0.8s forwards;
}

.effect-3 .line-3 {
  animation: effect-3_line-3 0.45s ease-in 0.5s forwards;
}

/* ===========
line-4
=========== */

.effect-3 .rotate135 {
  position: absolute;
  top: 49.5%;
  left: -22%;
  display: block;
  width: 100%;
  height: 100%;
  transform: rotate(135deg);
}

.effect-3 .line-wrapper-4 {
  width: 2.5%;
  height: 30%;
  animation: effect-3_line-wrapper-4 0.45s ease-in 0.8s forwards;
}

.effect-3 .line-4 {
  animation: effect-3_line-4 0.45s ease-in 0.5s forwards;
}

/* ===========
line-5
=========== */

.effect-3 .line-wrapper-5 {
  top: 90%;
  left: 50%;
  width: 2.5%;
  height: 30%;
  animation: effect-3_line-wrapper-5 0.45s ease-in 0.8s forwards;
}

.effect-3 .line-5 {
  animation: effect-3_line-5 0.45s ease-in 0.5s forwards;
}

/* ===========
line-6
=========== */

.effect-3 .rotate-135 {
  position: absolute;
  top: -19.5%;
  left: -48%;
  display: block;
  width: 100%;
  height: 100%;
  transform: rotate(-135deg);
}

.effect-3 .line-wrapper-6 {
  width: 2.5%;
  height: 30%;
  animation: effect-3_line-wrapper-6 0.45s ease-in 0.8s forwards;
}

.effect-3 .line-6 {
  animation: effect-3_line-6 0.45s ease-in 0.5s forwards;
}

/* ===========
line-7
=========== */

.effect-3 .line-wrapper-7 {
  top: 50%;
  left: -20%;
  width: 30%;
  height: 2.5%;
  animation: effect-3_line-wrapper-7 0.45s ease-in 0.8s forwards;
}

.effect-3 .line-7 {
  animation: effect-3_line-7 0.45s ease-in 0.5s forwards;
}

/* ===========
line-8
=========== */

.effect-3 .rotate-45 {
  position: absolute;
  top: -49%;
  left: 20%;
  display: block;
  width: 100%;
  height: 100%;
  transform: rotate(-45deg);
}

.effect-3 .line-wrapper-8 {
  width: 2.5%;
  height: 30%;
  animation: effect-3_line-wrapper-8 0.45s ease-in 0.8s forwards;
}

.effect-3 .line-8 {
  animation: effect-3_line-8 0.45s ease-in 0.5s forwards;
}

/* ===================
effect-4
==================== */

.effect-4 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
}

.double-wrapper-2 {
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: effect-4_double forwards;
}

.double-wrapper-1 {
  position: absolute;
  display: block;
  overflow: hidden;
  border-radius: 50%;
}

.double-wrapper-1::before {
  content: '';
  position: absolute;
  z-index: 2;
  display: block;
  background: #f2f3df;
}

.double-wrapper-1::after {
  content: '';
  position: absolute;
  z-index: 3;
  display: block;
  background: #f2f3df;
}

.double-block {
  position: absolute;
  border-radius: 50%;
  background: #f2f3df;
}

/* ==============
green circle
============== */

.color-green-2 {
  top: 0;
  animation-delay: 1.3s;
}

.color-green-1 {
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 34vw;
  height: 34vw;
  background: #75cfb9;
  transform: translate(-50%, -50%);
}

.color-green-1::before {
  top: 0;
  left: 17vw;
  width: 34vw;
  height: 34vw;
  transform-origin: left 17vw;
  animation: rotate-circle-right 0.5s linear 1.55s forwards;
}

.color-green-1::after {
  top: 0;
  left: -17vw;
  width: 34vw;
  height: 34vw;
  transform-origin: right 17vw;
  animation: rotate-circle-left 0.5s linear 1.3s forwards;
}

.color-green-0 {
  top: 50%;
  left: 50%;
  z-index: 4;
  width: 9vw;
  height: 9vw;
  transform: translate(-50%, -50%);
}

/* ==============
navy circle
============== */

.color-navy-2 {
  top: -100%;
  animation-delay: 1.4s;
}

.color-navy-1 {
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 25vw;
  height: 25vw;
  background: #485973;
  transform: translate(-50%, -50%) rotate(-20deg);
}

.color-navy-1::before {
  top: 0;
  left: 12.5vw;
  width: 25vw;
  height: 25vw;
  transform-origin: left 12.5vw;
  animation: rotate-circle-right 0.5s linear 1.65s forwards;
}

.color-navy-1::after {
  top: 0;
  left: -12.5vw;
  width: 25vw;
  height: 25vw;
  transform-origin: right 12.5vw;
  animation: rotate-circle-left 0.5s linear 1.4s forwards;
}

.color-navy-0 {
  top: 50%;
  left: 50%;
  z-index: 4;
  width: 9vw;
  height: 9vw;
  transform: translate(-50%, -50%);
}

/* ==============
yellow circle
============== */

.color-yellow-2 {
  top: -200%;
  animation-delay: 1.45s;
}

.color-yellow-1 {
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 23vw;
  height: 23vw;
  background: #ffe08b;
  transform: translate(-50%, -50%) rotate(20deg);
}

.color-yellow-1::before {
  top: 0;
  left: 11.5vw;
  width: 23vw;
  height: 23vw;
  transform-origin: left 11.5vw;
  animation: rotate-circle-right 0.5s linear 1.7s forwards;
}

.color-yellow-1::after {
  top: 0;
  left: -11.5vw;
  width: 23vw;
  height: 23vw;
  transform-origin: right 11.5vw;
  animation: rotate-circle-left 0.5s linear 1.45s forwards;
}

.color-yellow-0 {
  top: 50%;
  left: 50%;
  z-index: 4;
  width: 9vw;
  height: 9vw;
  transform: translate(-50%, -50%);
}

/* ==============
blue circle
============== */

.blue02 {
  top: -300%;
  animation-delay: 1.2s;
}

.blue01 {
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 16vw;
  height: 16vw;
  background: #457ed4;
  transform: translate(-50%, -50%) rotate(20deg);
}

.blue01::before {
  top: 0;
  left: 8vw;
  width: 16vw;
  height: 16vw;
  transform-origin: left 8vw;
  animation: rotate-circle-right 0.5s linear 1.45s forwards;
}

.blue01::after {
  top: 0;
  left: -8vw;
  width: 16vw;
  height: 16vw;
  transform-origin: right 8vw;
  animation: rotate-circle-left 0.5s linear 1.2s forwards;
}

.blue00 {
  top: 50%;
  left: 50%;
  z-index: 4;
  width: 7vw;
  height: 7vw;
  transform: translate(-50%, -50%);
}

/* ==============
red circle
============== */

.red02 {
  top: -400%;
  animation-delay: 1.3s;
}

.red01 {
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 12vw;
  height: 12vw;
  background: #e8595f;
  transform: translate(-50%, -50%) rotate(45deg);
}

.red01::before {
  top: 0;
  left: 6vw;
  width: 12vw;
  height: 12vw;
  transform-origin: left 6vw;
  animation: rotate-circle-right 0.5s linear 1.55s forwards;
}

.red01::after {
  top: 0;
  left: -6vw;
  width: 12vw;
  height: 12vw;
  transform-origin: right 6vw;
  animation: rotate-circle-left 0.5s linear 1.3s forwards;
}

.red00 {
  top: 50%;
  left: 50%;
  z-index: 4;
  width: 9vw;
  height: 9vw;
  transform: translate(-50%, -50%);
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
  animation: rhombus 0.7s ease-in 2s forwards;
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
  animation: effect-6_circle 0.2s ease-in 3s forwards;
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
  animation: effect-6_circle-element-1 0.2s ease-in 3s forwards;
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
  animation: effect-6_line-wrapper-1 0.5s ease-in 2s forwards;
}

.effect-6 .line-1 {
  animation: effect-6_line-1 0.5s ease-in 1.6s forwards;
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
  animation: effect-6_line-wrapper-1 0.5s ease-in 2s forwards;
}

.effect-6 .line-2 {
  animation: effect-6_line-1 0.5s ease-in 1.6s forwards;
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
  animation: effect-6_line-wrapper-1 0.5s ease-in 2s forwards;
}

.effect-6 .line-3 {
  animation: effect-6_line-1 0.5s ease-in 1.6s forwards;
}

/* ===========
line-4
=========== */

.effect-6 .line-wrapper-4 {
  top: 140%;
  left: 45%;
  width: 10%;
  height: 60%;
  animation: effect-6_line-wrapper-2 0.5s ease-in 2s forwards;
}

.effect-6 .line-4 {
  animation: effect-6_line-2 0.5s ease-in 1.6s forwards;
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
  animation: effect-6_line-wrapper-1 0.5s ease-in 2s forwards;
}

.effect-6 .line-5 {
  animation: effect-6_line-1 0.5s ease-in 1.6s forwards;
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
  animation: effect-6_line-wrapper-1 0.5s ease-in 2s forwards;
}

.effect-6 .line-6 {
  animation: effect-6_line-1 0.5s ease-in 1.6s forwards;
}

/* ===================
animation08
==================== */

.animation08 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: animation08 1.5s ease-out 2.8s forwards;
}

.animation08 div:nth-of-type(1) {
  width: 100%;
  height: 100%;
  background: #242324;
}

.animation08 div:nth-of-type(2) {
  width: 100%;
  height: 25%;
  background: #75cfb9;
}

.animation08 div:nth-of-type(3) {
  width: 100%;
  height: 25%;
  background: #457ed4;
}

.animation08 div:nth-of-type(4) {
  width: 100%;
  height: 25%;
  background: #e8595f;
}

.animation08 div:nth-of-type(5) {
  width: 100%;
  height: 25%;
  background: #ffe08b;
}

@media screen and (max-width: 750px) {
  /* ===================
effect-2
==================== */
  @keyframes effect-2 {
    0% {
      opacity: 1;
      transform: scale3d(0, 0, 1);
    }
    100% {
      opacity: 1;
      transform: scale3d(1.2, 1.2, 1);
    }
  }

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
