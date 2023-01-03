<template>
    <div
      class="bg-white dark:bg-neutral-800 rounded-lg pt-5 pr-5 pl-5 border border-neutral-200 dark:border-neutral-700 shadow-md"
    >
      <div class="flex flex-row align-end mb-5">
        <div
          class="skeleton-bg w-[160px] min-w-[160px] h-[230px] min-h-[230px] -mt-10 rounded-md shadow-md transform transition duration-250 "
        ></div>
        <div
          class="w-full min-h-[190px] ml-5 text-ellipsis overflow-hidden text-clip"
        >
          <div
            class="skeleton-bg rounded-3xl p-3 mb-1.5"
          ></div>
          <div
            class="skeleton-bg rounded-3xl p-3 mb-4 w-3/6"
          ></div>
          <div class="card-rank"></div>
        <div class="subjects flex flex-row flex-wrap gap-1.5">
            <div
                v-bind:key="index"
                v-for="(subject, index) in 5"
                class="skeleton-bg rounded-3xl py-3 px-4 w-3/12"
            >
               
            </div>
            </div>
        </div>
      </div>
      <BookCardReaderAvatar></BookCardReaderAvatar>
    </div>
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
  