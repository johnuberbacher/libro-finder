<template>
  <div
    class="flex flex-row items-center justify-between bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700"
  >
    <div class="font-semibold dark:text-white shrink-0 mr-5">
      Popular by Genre
    </div>
    <div
      class="h-full flex flex-row overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700 scrollbar-track-neutral-100 dark:scrollbar-track-neutral-900"
    >
      <div
        v-bind:key="index"
        v-for="(genre, index) in genreTabs"
        @click="loadWorksByGenre(genre)"
        class="h-full dark:text-white flex flex-col cursor-pointer dark:hover:bg-neutral-800 relative rounded-t-md"
        :class="
          homeTabStore.activeTab === genre
            ? 'bg-neutral-200 dark:bg-neutral-800'
            : ''
        "
      >
        <div class="text-sm font-semibold py-2.5 px-2.5 xl:px-5 capitalize">
          {{ genre }}
        </div>
        <div
          class="w-full h-[3px] rounded-lg absolute bottom-0 left-0 right-0"
          :class="
            homeTabStore.activeTab === genre
              ? 'bg-rose-600 shadow-md shadow-rose-600'
              : 'bg-transparent'
          "
        ></div>
      </div>
    </div>
  </div>
  <div
    class="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-10 gap-x-5 pt-10 lg:pr-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700 scrollbar-track-neutral-100 dark:scrollbar-track-neutral-900"
  >
    <BookCardSkeletonCard
      v-show="!homeTabStore.worksResponse.works"
      v-bind:key="index"
      v-for="(work, index) in 20"
    ></BookCardSkeletonCard>
    <BookCard
      v-show="homeTabStore.worksResponse.works"
      v-bind:key="index"
      v-for="(work, index) in homeTabStore.worksResponse.works"
      :bookID="work.cover_edition_key"
      :bookTitle="work.title"
      :bookAuthor="work.authors"
      :bookImageUrl="
        'https://covers.openlibrary.org/b/olid/' +
        work.cover_edition_key +
        '-M.jpg'
      "
      :bookSubjects="work.subject"
      bookUrl="title"
    ></BookCard>
    <button class="py-2.5 px-5 text-white bg-rose-600 hover:bg-rose-500 active:bg-rose-700 transition-[background] select-none cursor-pointer shadow col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2 rounded-full mb-12 text-center font-semibold">View More</button>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useHomeTabStore } from "@/stores/homeTabs";
const homeTabStore = useHomeTabStore();
const genreTabs = [
  "fiction",
  "science",
  "fantasy",
  "literature",
  "romance",
  "history",
];

async function loadWorksByGenre(genre) {
  homeTabStore.activeTab = genre;
  await this.homeTabStore.loadWorksByGenre(genre);
}

onMounted(async () => {
  console.log(homeTabStore.worksResponse)
  homeTabStore.activeTab = "fiction";
  await homeTabStore.loadWorksByGenre("fiction");
});
</script>
