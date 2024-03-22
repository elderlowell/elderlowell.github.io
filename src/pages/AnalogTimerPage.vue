<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import MadeByFooter from '@/components/MadeByFooter.vue'

const sound = new Audio('https://freesfx.co.uk/sound/14777_1460060679.mp3')
const durationInMiliseconds = ref(0)
const timerInterval: Ref<ReturnType<typeof setInterval> | undefined> = ref()
const mute = ref(false)
const customValue: Ref<number | undefined> = ref(undefined)

const startTimer = () => {
  timerInterval.value = setInterval(updateTimer, 1000)
}
const stopTimer = () => {
  clearInterval(timerInterval.value)
  timerInterval.value = undefined
}
const reset = () => {
  stopTimer()
  durationInMiliseconds.value = 0
}
const updateTimer = () => {
  durationInMiliseconds.value -= 1000

  if (durationInMiliseconds.value === 0) {
    stopTimer()
    if (!mute.value) {
      sound.play()
    }
  }
}
const setTime = (minutes: number) => {
  durationInMiliseconds.value = minutes * 60000
}
</script>

<template>
  <div class="p-2 max-w-fit">
    <div class="p-4 border-2 border-slate-300 rounded-lg bg-white mb-2">
      <div class="flex">
        <div
          id="timer"
          class="relative rounded-full h-48 min-h-48 w-48 min-w-48 border-8 border-slate-600 bg-white"
        >
          <div
            id="shade"
            class="absolute rounded-full h-48 w-48 -translate-x-2 -translate-y-2 scale-95"
            :style="`background: conic-gradient(white calc(360deg - ${(durationInMiliseconds / 60 / 1000) * 6}deg), red 0)`"
          />
          <div
            id="ticks"
            v-for="second in 60"
            :key="second"
            class="absolute w-1 h-1/2 border-slate-600 left-1/2 bottom-1/2 origin-bottom-left -translate-x-0.5"
            :class="{
              'border-t-8 border-opacity-60': second % 5 !== 0,
              'border-t-[16px]': second % 5 === 0
            }"
            :style="`rotate: ${second * 6}deg`"
          />
          <div
            id="hand"
            class="absolute w-1 h-1/2 border-black rounded-full left-1/2 bottom-1/2 origin-bottom-left border-l-4 -translate-x-0.5"
            :style="`rotate: -${(durationInMiliseconds / 60 / 1000) * 6}deg`"
          />
          <div
            id="knob"
            class="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full border-4 border-black bg-white"
          />
        </div>
        <div class="ml-4">
          <div class="flex justify-between">
            <div class="text-slate-700">Minutes:</div>
            <input
              type="text"
              pattern="[0-9\s]"
              maxlength="2"
              class="w-12 border border-black rounded-lg text-xs text-center px-2 py-1"
              v-model="customValue"
              @keyup.enter="
                () => {
                  setTime(customValue || 0)
                  customValue = undefined
                }
              "
            />
          </div>
          <div class="grid grid-cols-3 gap-2 mt-4">
            <button
              v-for="number in [1, 2, 3, 5, 7, 10]"
              :key="number"
              @click="setTime(number)"
              class="h-10 w-10 rounded-full bg-slate-600 text-white"
            >
              {{ number }}
            </button>
          </div>
          <div class="flex justify-center gap-2 mt-4">
            <button
              id="reset"
              @click="reset()"
              :disabled="!!timerInterval || durationInMiliseconds === 0"
              class="bg-sky-300 action-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
            </button>
            <button
              id="start"
              @click="startTimer()"
              :disabled="!!timerInterval || durationInMiliseconds === 0"
              class="bg-emerald-400 action-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              id="stop"
              @click="stopTimer()"
              :disabled="!timerInterval"
              class="bg-yellow-400 action-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <MadeByFooter />
    <button
      class="absolute flex justify-center items-center h-6 w-6 rounded-full bg-slate-300 text-slate-700 top-5 left-5"
      @click="mute = !mute"
    >
      <svg
        v-if="!!mute"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
html {
  max-width: 396px;
  max-height: 267px;
}
.action-btn {
  @apply flex justify-center items-center h-10 w-10 rounded-full text-slate-600 disabled:bg-opacity-40 disabled:text-opacity-40;
}
</style>
