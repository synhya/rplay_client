<script setup>
import { ref } from 'vue'

// 비밀번호 입력 가시성 토글을 위한 상태
const passwordVisible = ref(false)

// 비밀번호 가시성 토글 함수
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value
}
</script>

<template>
  <div class="overlay-80 fixed flex h-full w-full justify-center overflow-auto popup-padding items-start" style="z-index: 80;">
    <div class="default-popup-box relative flex w-full max-w-464px items-start justify-center shadow-md">
      <div class="w-full">
        <div class="plax-popup-inner" style="padding: 36px 0px;">
          <!-- 닫기 버튼 -->
          <button class="absolute right-0 h-6 w-6" style="top: -30px;">
            <img src="/img/cancel.276ef57e.svg" alt="cls" class="block w-full">
          </button>
          
          <!-- 로그인/회원가입 선택 -->
          <div class="header relative flex w-full flex-row items-center justify-between">
            <div class="flex w-full items-center justify-center text-plaxgray-90">
              <button class="flex-1 pb-3 text-md2 border-b-3px border-plaxsky font-bold text-plaxsky"> 로그인 </button>
              <button class="flex-1 pb-3 text-md2 border-b border-plaxgray-160"> 회원가입 </button>
            </div>
          </div>
          
          <!-- 로그인 입력 폼 -->
          <div class="flex w-full justify-center px-6">
            <div class="mt-9 flex w-full flex-col">
              
              <!-- 이메일 입력 -->
              <div class="w-full">
                <h2 class="mb-3 ml-3 w-full text-md font-bold text-white"> 이메일 </h2>
                <input
                  type="email"
                  placeholder="이메일"
                  autocomplete="username"
                  class="focus:outline-none block w-full rounded border border-plaxtext bg-plaxblack-50 p-3 px-4 py-14px text-md text-white placeholder-plaxgray-110">
              </div>
              
              <!-- 비밀번호 입력 -->
              <div class="relative mt-6">
                <h2 class="mb-3 ml-3 w-full text-md font-bold text-white"> 비밀번호 </h2>
                <div class="input-pw flex items-center">
                  <input
                    :type="passwordVisible ? 'text' : 'password'"
                    placeholder="비밀번호"
                    autocomplete="current-password"
                    class="focus:outline-none block w-full rounded border border-plaxtext bg-plaxblack-50 p-3 px-4 py-14px text-md text-white placeholder-plaxgray-110">
                  <button @click="togglePasswordVisibility" class="absolute right-16px">
                    <img v-if="passwordVisible" src="/img/show.3452d1bf.svg" alt="pwVisible">
                    <img v-else src="/img/hidden.3bdd6232.svg" alt="pwHidden">
                  </button>
                </div>
              </div>
              
              <!-- 로그인 버튼 및 소셜 로그인 -->
              <div class="mt-6 flex w-full flex-col items-center justify-center">
                <span class="block overflow-hidden hover:opacity-75" style="width: 295px;">
                  <div class="cursor-pointer select-none flex h-12 w-full text-md">
                    <button class="flex h-full w-full items-center justify-center rounded-full text-white bg-plaxsky text-md" style="border-radius: 6px; font-weight: 700;">
                      <div class="flex h-full items-center">
                        <span class="whitespace-no-wrap">로그인</span>
                      </div>
                    </button>
                  </div>
                </span>
                
                <button class="mt-3 flex h-12 items-center justify-center rounded-6px border border-plaxgray-130 bg-plaxgray-160 text-12 hover:opacity-75" style="width: 295px;">
                  <img src="/img/btn_google.109c5479.svg" style="width: 15.8px;">
                  <span class="ml-6px text-md text-white">구글 계정으로 로그인</span>
                </button>
                
                <button class="mt-3 flex h-12 items-center justify-center rounded-6px border border-plaxgray-130 bg-plaxgray-160 text-12 hover:opacity-75" style="width: 295px;">
                  <img src="/img/btn_apple.ba6da963.svg" style="width: 15.8px;">
                  <span class="ml-6px text-md text-white">애플 계정으로 로그인</span>
                </button>
              </div>
              
              <!-- 비밀번호 잊기 -->
              <div class="mt-9 flex flex-row items-center justify-center">
                <button class="whitespace-no-wrap border-b border-plaxgray-90 text-13 text-plaxgray-90"> 비밀번호를 잊어버리셨나요? </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
