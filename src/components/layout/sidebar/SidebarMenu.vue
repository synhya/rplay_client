
<script>
import MenuItem from './MenuItem.vue';

export default {
  components: {
    MenuItem,
  },
};
</script>

<template>
  <div class="delay-700 to-down-animation pt-20px">
    <div class="px-6 mb-10px text-12 text-plaxgray-90">마이페이지</div>
    <div class="flex flex-col w-full text-14">
      <MenuItem title="내 채널" icon="/img/my-channel.9b6a40ee.svg" />
      <MenuItem title="내 정보" icon="/img/user.740db987.svg" />
      <MenuItem title="좋아요 목록" icon="/img/renewal_heart.e1530397.svg" />
      <MenuItem title="구매 목록" icon="/img/renewal_purchase.dd6621e2.svg" />
      <MenuItem title="재생 목록" icon="/img/renewal_play.4f55f39d.svg" />
      <MenuItem title="장바구니" icon="/img/shoppingcart_bag.6b85e4c4.svg" />
    </div>
  </div>
</template>

