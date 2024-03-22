<script lang="ts" setup>
import { ref, computed, type Ref } from 'vue'
import MadeByFooter from '@/components/MadeByFooter.vue'

const sound = new Audio('https://freesfx.co.uk/sound/14777_1460060679.mp3')
const durationInSeconds = ref(0)
const timerInterval: Ref<ReturnType<typeof setInterval> | undefined> = ref()
const mute = ref(false)
const customValue: Ref<number | undefined> = ref(undefined)
const timeValues = computed(() => {
  const wholeMinutes = Math.floor(durationInSeconds.value / 60)
  const wholeSeconds = Math.floor(durationInSeconds.value % 60)
  return {
    minutes: wholeMinutes < 10 ? `0${wholeMinutes}` : wholeMinutes.toString(),
    seconds: wholeSeconds < 10 ? `0${wholeSeconds}` : wholeSeconds.toString()
  }
})

const startTimer = () => {
  timerInterval.value = setInterval(updateTimer, 1000)
}
const stopTimer = () => {
  clearInterval(timerInterval.value)
  timerInterval.value = undefined
}
const reset = () => {
  stopTimer()
  durationInSeconds.value = 0
}
const updateTimer = () => {
  durationInSeconds.value -= 1

  if (durationInSeconds.value === 0) {
    stopTimer()
    if (!mute.value) {
      sound.play()
    }
  }
}
const setTime = (minutes: number) => {
  durationInSeconds.value = minutes * 60
}
</script>

<template>
  <div class="p-2 max-w-fit">
    <div class="p-4 border-2 border-slate-300 rounded-lg bg-white mb-2">
      <div class="flex">
        <div
          id="timer"
          class="rounded-xl h-auto w-48 min-w-48 px-4 border-8 border-slate-600 bg-white flex justify-around items-center text-5xl text-slate-700"
        >
          <div>{{ timeValues.minutes }}</div>
          <div class="pb-2">:</div>
          <div>{{ timeValues.seconds }}</div>
        </div>
        <div class="ml-4 flex gap-4">
          <div class="grid grid-cols-3 gap-2 max-h-fit">
            <button
              v-for="number in [1, 2, 3, 5, 7, 10]"
              :key="number"
              @click="setTime(number)"
              class="h-10 w-10 rounded-full bg-slate-600 text-white"
            >
              {{ number }}
            </button>
          </div>
          <div class="">
            <div class="flex justify-between h-10 pt-2">
              <div class="text-slate-700">Minutes:</div>
              <input
                type="text"
                pattern="[0-9\s]"
                maxlength="2"
                class="w-12 h-min border border-black rounded-lg text-xs text-center px-2 py-1"
                v-model="customValue"
                @keyup.enter="
                  () => {
                    setTime(customValue || 0)
                    customValue = undefined
                  }
                "
              />
            </div>
            <div class="flex justify-center gap-2 mt-4">
              <button
                id="reset"
                @click="reset()"
                :disabled="!!timerInterval || durationInSeconds === 0"
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
                :disabled="!!timerInterval || durationInSeconds === 0"
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
