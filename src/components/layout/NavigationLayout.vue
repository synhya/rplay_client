<script setup>
import { ref } from 'vue'
import NavigationMenu from '@/components/navigation/NavigationMenu.vue'
import Footer from '@/components/layout/Footer.vue'

const menuItems = ref([
  { label: '전체', link: '/', active: true },
  { label: '라이브', link: '/p/live', active: false },
  { label: 'ASMR/롤플레잉', link: '/p/asmr', active: false },
  { label: '애니/드로잉', link: '/p/draw', active: false },
  { label: '신인', link: '/p/newbie', active: false }
])
</script>

<template>
  <NavigationMenu :menuItems="menuItems" />
  <div class="flex-1"><RouterView /></div>
  <Footer />
</template>
