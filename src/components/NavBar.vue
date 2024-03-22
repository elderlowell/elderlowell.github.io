<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', children: [{ name: 'Test', path: '/projects/test' }] },
  {
    name: 'Widgets',
    children: [
      { name: 'Analog Timer', path: '/widgets/analog-timer' },
      { name: 'Digital Timer', path: '/widgets/digital-timer' }
    ]
  }
]
</script>

<template>
  <div class="w-full fixed backdrop-blur-sm">
    <div class="flex justify-center p-4 gap-8">
      <div v-for="(route, idx) in routes" :key="idx">
        <router-link v-if="route.path" :to="route.path" class="nav-link">{{
          route.name
        }}</router-link>
        <Menu v-else as="div" class="relative ml-3">
          <MenuButton class="nav-link">{{ route.name }}</MenuButton>
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <MenuItem v-for="child in route.children" :key="child.name" v-slot="{ active }">
                <router-link
                  :to="child.path"
                  :class="[
                    active ? 'text-rose-700 rounded-md' : '',
                    'block text-right px-4 py-3 text-lg text-gray-700'
                  ]"
                  >{{ child.name }}
                </router-link>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-link {
  @apply text-2xl font-semibold hover:text-rose-700 ease-in-out duration-300;
}
</style>
