<template>
  <div class="h-full w-full">
    <div class="grid grid-cols-1 gap-0 mb-16">
      <HomeCarousel></HomeCarousel>
    </div>
    <div class="h-full grid grid-cols-1 lg:grid-cols-4">
      <div
        class="h-full lg:col-span-1 overflow-y-auto px-5 lg:pr-0 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100"
      >
        <div class="h-full overflow-y-auto">
          <SidebarBookList></SidebarBookList>
          <SidebarAuthorList></SidebarAuthorList>
        </div>
      </div>
      <div
        class="h-full w-full lg:col-span-3 overflow-y-auto px-5 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900"
      >
        <div
          class="sticky z-10 top-0 left-0 right-0 overflow-hidden flex flex-row items-center justify-between bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 mb-5"
        >
          <div class="font-semibold dark:text-white">Popular by Genre</div>
          <div class="h-full flex flex-row">
            <div
              v-bind:key="index"
              v-for="(genre, index) in tabs"
              @click="loadapiMethods(genre)"
              class="h-full dark:text-white flex flex-col cursor-pointer dark:hover:bg-neutral-800"
            >
              <div class="py-2.5 px-2.5 capitalize">{{ genre }}</div>
              <div
                class="w-full h-[2px] shadow-md shadow-rose-600/50"
                :class="genre == activeTab ? 'bg-rose-600' : 'bg-transprent'"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="h-full grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-5 pt-5"
        >
          <BookCard
            v-bind:key="index"
            v-for="(work, index) in apiMethods.works"
            :bookID="work.cover_edition_key"
            :bookTitle="work.title"
            bookAuthor="name"
            :bookImageUrl="
              'https://covers.openlibrary.org/b/olid/' +
              work.cover_edition_key +
              '-M.jpg'
            "
            :bookSubjects="work.subject"
            bookUrl="title"
          ></BookCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import MethodsAPI from "../common/connection";

export default {
  data() {
    return {
      tabs: [
        "all Genres",
        "fiction",
        "sci-Fi",
        "fantasy",
        "horror",
        "history",
        "romance",
      ],
      fetchError: "",
    };
  },
  setup() {
    const apiMethods = ref({});

    const loadapiMethods = async (genre) => {
      apiMethods.value = await MethodsAPI.getWorksByGenre(genre);
      console.log(genre)
      const activeTab = genre.toString();
      console.log(genre)
    };

    return {
      apiMethods,
      loadapiMethods,
    };
  },
  methods: {
    handleFileUpload(e) {
      this.form.icon = e.target.files[0];
    },
  },
};
</script>
