<script setup>
import { ref } from 'vue'

// 각종 정보를 스크립트에서 변수로 관리
const companyName = ref('(주)플랙스뉴럴랩스')
const representatives = ref('박창윤 유영윤')
const address = ref('서울시 관악구 관천로 71-7 2F')
const businessNumber = ref('164-87-01911')
const email = ref('help@rplay.live')
const salesNumber = ref('2022-서울관악-1474호')

const menuItems = ref([
  { label: '이용약관', link: '/info/oppolicy1' },
  { label: '개인정보 처리 방침', link: '/info/oppolicy2' },
  { label: '이용방법', link: '/info/creator' },
  { label: 'FAQ', link: '/info/faq' },
  { label: '인재채용', link: '/info/careers' },
  { label: '문의 및 제안', link: 'mailto:help@rplay.live' }
])
</script>

<template>
  <footer class="w-full overflow-hidden pt-2">
    <div class="w-full">
      <div
        class="text-plaxgray-90g flex w-full flex-col items-center justify-center bg-transparent py-3 md:flex-row"
      >
        <div class="flex w-full flex-col justify-start md:w-4/5">
          <!-- 메뉴 항목들 -->
          <div class="flex flex-col items-center">
            <div class="flex w-full flex-wrap items-center justify-center">
              <template v-for="(item, index) in menuItems" :key="index">
                <a
                  :href="item.link"
                  class="whitespace-no-wrap flex px-1 hover:text-gray-500 text-12"
                  >{{ item.label }}</a
                >
                <span v-if="index < menuItems.length - 1" class="inline-block px-1">|</span>
              </template>
            </div>
          </div>

          <!-- 회사 정보 -->
          <div
            class="text-plaxgray-90g flex w-full flex-wrap items-center justify-center py-1 text-center font-thin md:items-start"
            style="font-size: 0.75rem"
          >
            <div class="px-1">{{ companyName }} | 각자대표 : {{ representatives }} |</div>
            <div class="px-1">{{ address }} |</div>
            <div class="px-1">
              사업자 등록번호 : {{ businessNumber }} | 이메일: {{ email }} | 통신판매업신고번호 :
              {{ salesNumber }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
