<template>
  <div
    class="font-semibold dark:text-white border-b border-neutral-200 dark:border-neutral-700 py-2 capitalize mb-5"
  >
    Popular Series
  </div>
  <NuxtLink
    to="/"
    v-bind:key="index"
    v-for="(work, index) in 5"
    class="flex flex-row items-center justify-start mb-2.5 hover:bg-neutral-800 rounded"
  >
    <div
      style="
        background-image: url(https://prodimage.images-bn.com/pimages/9780525655633_p0_v5_s1200x630.jpg);
      "
      class="bg-cover bg-center w-[45px] min-w-[45px] h-[68px] min-h-[68px] mr-4 rounded-sm cursor-pointer shadow-sm"
    ></div>
    <div>
      <div class="card-title font-semibold dark:text-white">Title</div>
      <div class="card-author text-sm text-neutral-500 dark:text-neutral-400">
        by Author
      </div>
    </div>
  </NuxtLink>
</template>
