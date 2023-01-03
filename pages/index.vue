<template>
  <div class="w-full flex flex-col overflow-hidden">
    <div class="grid grid-cols-1 gap-0 mb-16">
      <HomeCarousel></HomeCarousel>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 overflow-hidden mb-5">
      <div
        class="h-full lg:col-span-1 overflow-y-auto px-5 lg:pr-0 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100"
      >
        <div class="h-full overflow-y-auto">
          <HomePopular></HomePopular>
          <SidebarAuthorList></SidebarAuthorList>
        </div>
      </div>
      <div class="h-full w-full relative overflow-hidden lg:col-span-3 px-5">
        <HomeTabs></HomeTabs>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHomeTabStore } from "@/stores/homeTabs";
const homeTabStore = useHomeTabStore();
</script>
