<template>
  <div>
    <div class="flex justify-between w-full mt-24px">
      <div
        class="flex items-center justify-center rounded-6px bg-plaxgray-160 text-12 text-plaxgray-90"
        style="width: 90px; height: 25px"
      >
        보유 코인
      </div>
      <div class="ml-4">0</div>
    </div>
    <div class="flex justify-between w-full mt-12px">
      <div
        class="flex items-center justify-center rounded-6px bg-plaxgray-160 text-12 text-plaxgray-90"
        style="width: 90px; height: 25px"
      >
        보너스 코인
      </div>
      <div class="ml-4">0</div>
    </div>
    <button
      class="flex items-center justify-center w-full mt-4 delay-500 cursor-pointer to-down-animation bg-charge-btn-border rounded-10px"
      style="height: 48px"
    >
      <div
        class="flex items-center justify-center font-bold bg-charge-btn-back rounded-7px text-md"
        style="width: calc(100% - 5px); height: calc(100% - 5px)"
      >
        <img style="width: 20px; height: 20px" /> 충전하기
      </div>
    </button>
  </div>
</template>
