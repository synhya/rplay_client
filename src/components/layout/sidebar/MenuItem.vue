<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
    },
  };
</script>

<template>
  <div class="flex items-center justify-between px-6 cursor-pointer py-10px hover:bg-plaxgray-160">
    <div class="flex">
      <img :src="icon" style="width: 20px; height: 20px;" />
      <span class="ml-1">{{ title }}</span>
    </div>
  </div>
</template>

