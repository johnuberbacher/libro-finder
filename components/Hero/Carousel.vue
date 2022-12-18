<template>
  <div class="mb-24">
    <div
      :style="{ 'background-image': 'url(' + props.bookImageUrl + ')' }"
      class="bg-cover bg-center bg-no-repeat"
    >
      <div class="backdrop-blur-xl bg-neutral-900/25 p-5">
        <div class="flex flex-row align-end">
          <div
            :style="{ 'background-image': 'url(' + props.bookImageUrl + ')' }"
            class="bg-cover bg-center w-[180px] min-w-[180px] h-[270px] min-h-[270px] rounded-sm cursor-pointer -mb-10 shadow-md hover:shadow-lg transform transition duration-250 hover:scale-[1.05]"
          ></div>
          <div
            class="h-[190px] min-h-[190px] ml-5 text-ellipsis overflow-hidden text-clip"
          >
            <div class="card-title text-2xl font-semibold text-white">
              {{ props.bookTitle ? props.bookTitle : "error" }}
            </div>
            <div
              class="card-author text-sm text-neutral-500 mb-4 text-white"
            >
              by {{ props.bookAuthor ? props.bookAuthor : "error" }}
            </div>
            <div class="card-rank"></div>
            <div
              class="card-description text-sm text-neutral-500 text-white mb-4"
            >
              {{ props.bookDescription ? props.bookDescription : "" }}
            </div>
            <div
              class="bg-white px-5 py-2 rounded-full inline-block text-sm font-semibold mr-4 mb-2"
            >
              Check it out
            </div>
            <div
              class="bg-white px-5 py-2 rounded-full inline-block text-sm font-semibold"
            >
              Find more like this
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
