<template>
  <div class="mb-16">
    <div
      :style="{ 'background-image': 'url(' + props.bookImageUrl + ')' }"
      class="bg-cover bg-center bg-no-repeat"
    >
      <div class="backdrop-blur-xl bg-neutral-900/25 p-5">
        <div class="flex flex-row align-end">
          <div
            :style="{ 'background-image': 'url(' + props.bookImageUrl + ')' }"
            class="bg-cover bg-center w-[180px] min-w-[180px] lg:w-[225px] lg:min-w-[225px] h-[270px] min-h-[270px] lg:h-[337px] lg:min-h-[337px] -mb-20 rounded-sm border border-neutral-200 dark:border-neutral-700 cursor-pointer shadow-md hover:shadow-xl transform transition duration-250 hover:scale-[1.05]"
          ></div>
          <div class="flex flex-col items-start justify-center ml-5 lg:ml-10 lg:my-10">
            <div
              class="text-2xl lg:text-4xl font-semibold text-white"
            >
              {{ props.bookTitle ? props.bookTitle : "error" }}
            </div>
            <div
              class="text-sm lg:text-xl mt-4 text-white"
            >
              by {{ props.bookAuthor ? props.bookAuthor : "error" }}
            </div>
            <div class=""></div>
            <div
              class="text-sm text-white mt-4"
            >
              {{ props.bookDescription ? props.bookDescription : "" }}
            </div>
            <div
              class="text-sm text-white mt-4">
            First published September 24, 2001
            </div>

            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps([
  "bookTitle",
  "bookAuthor",
  "bookDescription",
  "bookImageUrl",
  "bookUrl",
]);
</script>
