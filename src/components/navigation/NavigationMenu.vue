<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  menuItems: {
    type: Array,
    required: true
  }
})

const { menuItems } = toRefs(props)
</script>

<template>
  <div
    class="flex flex-row w-full overflow-x-scroll hideScroll bg-plaxgray-170 p-6px rounded-10px"
    style="height: 53px"
  >
    <a
      v-for="(item, index) in menuItems"
      :key="index"
      :href="item.link"
      :class="[
        'flex cursor-pointer items-center justify-center whitespace-nowrap rounded-6px py-8px text-md text-plaxgray-90 hover:font-bold md:text-16',
        item.active ? 'bg-plaxsky font-bold text-renewal-white' : ''
      ]"
      style="width: calc(16.6667%)"
    >
      {{ item.label }}
    </a>
  </div>
</template>
