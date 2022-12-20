<template>
  <NuxtLink
    prefetch
    :to="'/book/' + props.bookID"
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
          class="card-author text-sm text-neutral-500 dark:text-neutral-400 mb-4"
        >
          by {{ props.bookAuthor ? props.bookAuthor : "error" }}
        </div>
        <div class="card-rank"></div>
        <div class="subjects flex flex-row flex-wrap gap-2.5">
          <div
            v-bind:key="index"
            v-for="(subject, index) in props.bookSubjects.slice(0, 5)"
            class="rounded-full capitalize bg-neutral-200 dark:text-white dark:bg-neutral-700 py-1.5 px-3 text-xs font-semibold inline-block"
          >
            {{ subject }}
          </div>
        </div>
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
  "bookID",
  "bookTitle",
  "bookAuthor",
  "bookSubjects",
  "bookImageUrl",
  "bookUrl",
]);
</script>
