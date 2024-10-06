<script setup>
import { ref } from 'vue'
import NavigationMenu from '@/components/navigation/NavigationMenu.vue'

const menuItems = ref([
  { label: '전체', link: 'https://rplay.live/', active: true },
  { label: '라이브', link: 'https://rplay.live/p/live', active: false },
  { label: 'ASMR/롤플레잉', link: 'https://rplay.live/p/asmr', active: false },
  { label: '애니/드로잉', link: 'https://rplay.live/p/draw', active: false },
  { label: '여성향', link: 'https://rplay.live/p/63fd7b00e897e0cf7582863f', active: false },
  { label: '신인', link: 'https://rplay.live/p/newbie', active: false }
])
</script>

<template>
  <NavigationMenu :menuItems="menuItems" />
</template>
