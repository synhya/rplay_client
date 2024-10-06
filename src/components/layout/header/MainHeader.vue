<script setup>
import SearchBar from './SearchBar.vue'
</script>

<template>
  <div class="relative flex flex-col items-center w-full h-full overflow-hidden">
    <div class="w-full">
      <div
        class="flex justify-center bg-renewal-dark text-plaxtext"
        style="z-index: 101; height: 76px"
      >
        <div class="flex items-center justify-between w-full h-full">
          <div class="relative flex-1 max-w-xl mx-2" style="height: 52px">
            <SearchBar />
          </div>
          <div class="flex items-center space-x-2">
            <button class="h-6 bg-red-400 rounded-full bg-plaxgray-90 w-14"></button>
            <button class="w-10 p-2 bg-sky-500"><!-- 아이콘 이미지 자리 --></button>
            <button class="w-10 p-2 bg-sky-500"><!-- 알림 아이콘 자리 --></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
