<script>
import SidebarHeader from './SidebarHeader.vue'
import SidebarActions from './SidebarActions.vue'
import SidebarMenu from './SidebarMenu.vue'
import SidebarCreator from './SidebarCreator.vue'
import SidebarFooter from './SidebarFooter.vue'

export default {
  components: {
    SidebarHeader,
    SidebarActions,
    SidebarMenu,
    SidebarCreator,
    SidebarFooter
  }
}
</script>

<template>
  <aside>
    <div
      id="sidebar"
      class="sticky top-0 left-0 flex-none mr-6 overflow-hidden bg-renewal-dark2 text-renewal-white w-max rounded-tr-10px"
      style="margin-top: 76px; height: 747px"
    >
      <div
        class="w-full h-full overflow-x-hidden overflow-y-scroll hidden-scroll-style overscroll-contain"
      >
        <div class="w-216px pb-76px">
          <SidebarHeader />
          <SidebarActions />
          <SidebarMenu />
          <SidebarCreator />
          <SidebarFooter />
        </div>
      </div>
    </div>
  </aside>
</template>
