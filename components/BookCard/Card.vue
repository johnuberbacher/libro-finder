<template>
  <NuxtLink
    v-if="bookID != 'skeleton'"
    prefetch
    :to="{ path: '/book/' + props.bookID, workID: props.bookID}"
    class="bg-white dark:bg-neutral-800 active:dark:bg-neutral-900 rounded-lg pt-5 px-5 border border-neutral-200 dark:border-neutral-700 shadow-md flex flex-col items-stretch justify-between"
  >
    <div class="flex flex-row align-end mb-2.5">
      <div
        :style="{ 'background-image': 'url(' + props.bookImageUrl + ')' }"
        class="bg-neutral-700 bg-cover bg-center w-[160px] min-w-[160px] h-[230px] min-h-[230px] -mt-10 rounded-md cursor-pointer shadow-md hover:shadow-xl transform transition duration-250 hover:scale-[1.05]"
      ></div>
      <div class="min-h-[190px] ml-5 text-ellipsis overflow-hidden text-clip">
        <div class="card-title font-semibold dark:text-white">
          {{ props.bookTitle ? props.bookTitle : "error" }}
        </div>
        <div
          class="card-author text-sm text-neutral-500 dark:text-neutral-400 mb-4"
        >
          <div
            v-bind:key="index"
            v-for="(author, index) in props.bookAuthor"
            >{{ author.name }}</div
          >
        </div>
        <div class="card-rank"></div>
        <div class="subjects flex flex-row flex-wrap gap-1.5">
          <div
            v-bind:key="index"
            v-for="(subject, index) in props.bookSubjects.slice(0, 5)"
            class="rounded-xl capitalize bg-neutral-200 dark:text-white dark:bg-neutral-700 py-1.5 px-3 text-xs inline-block"
          >
            {{ subject.replace(/ \([\s\S]*?\)/g, "").toLowerCase() }}
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
