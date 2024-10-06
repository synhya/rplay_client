<script setup>
import { onMounted } from 'vue'
import Sidebar from './components/layout/sidebar/MainSidebar.vue'
import SidebarLogo from './components/layout/sidebar/SidebarLogo.vue'
import Header from './components/layout/header/MainHeader.vue'
import HomePage from './pages/HomePage.vue'

onMounted(() => {
  console.log('Component is mounted')
})
</script>

<template>
  <div class="relative flex flex-col items-start flex-grow h-full">
    <div class="relative z-10 flex items-start w-full">
      <div>
        <SidebarLogo />
        <Sidebar />
      </div>
      <div class="relative flex flex-col items-center w-full h-full overflow-hidden md:mr-6">
        <Header />
        <main class="relative flex flex-row w-full h-full min-h-screen">
          <HomePage />
        </main>
      </div>
    </div>
  </div>
</template>
