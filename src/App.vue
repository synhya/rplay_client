<script setup>
import Sidebar from './components/layout/sidebar/MainSidebar.vue'
import SidebarLogo from './components/layout/sidebar/SidebarLogo.vue'
import Header from './components/layout/header/MainHeader.vue'
import LoginModal from './components/modal/LoginModal.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const showLoginModal = computed(() => store.state.showLoginModal);
</script>

<template>
  <div class="relative flex flex-col items-start flex-grow h-full">
    <div class="relative z-10 flex items-start w-full">
      <div>
        <SidebarLogo />
        <Sidebar />
      </div>
      <div
        class="relative flex flex-col items-center w-full h-full min-h-screen overflow-hidden md:mr-6"
      >
        <Header />
        <main class="relative flex flex-col w-full h-full flex-grow">
          <RouterView />
        </main>
      </div>
      <LoginModal v-if="showLoginModal" />
    </div>
  </div>
</template>
