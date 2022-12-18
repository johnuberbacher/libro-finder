<template>
  <NuxtLink
    to="/book/1"
    class="bg-white dark:bg-neutral-800 rounded-lg pt-5 pr-5 pl-5 border border-neutral-200 dark:border-neutral-700 shadow-md"
  >
    <div class="flex flex-row align-end mb-5">
      <div
        :style="{ 'background-image': 'url(' + props.bookImageUrl + ')' }"
        class="bg-cover bg-center w-[160px] min-w-[160px] h-[230px] min-h-[230px] -mt-10 rounded-sm border border-neutral-200 dark:border-neutral-700 cursor-pointer shadow-md hover:shadow-xl transform transition duration-250 hover:scale-[1.05]"
      ></div>
      <div
        class="h-[190px] min-h-[190px] ml-5 text-ellipsis overflow-hidden text-clip"
      >
        <div class="card-title font-semibold dark:text-white">
          {{ props.bookTitle ? props.bookTitle : "error" }}
        </div>
        <div
          class="card-author text-sm text-neutral-500 dark:text-neutral-400 mb-2"
        >
          by {{ props.bookAuthor ? props.bookAuthor : "error" }}
        </div>
        <div class="card-rank"></div>
        <div
          class="card-description text-sm text-neutral-500 dark:text-neutral-400"
        >
          {{ props.bookDescription ? props.bookDescription : "" }}
        </div>
      </div>
    </div>
    <BookCardReaderAvatar></BookCardReaderAvatar>
  </NuxtLink>
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
