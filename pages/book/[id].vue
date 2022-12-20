<template>
  <div class="h-full w-full">
    <div class="grid grid-cols-1 gap-0">
      <PageBookCarousel
        bookTitle="Name of the Wind"
        bookAuthor="Patrick Rothfuss"
        bookDescription="The Name of the Wind, also referred to as The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Mans Fear. It was published on March 27, 2007, by DAW Books."
        bookImageUrl="https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg"
        bookUrl="title"
      ></PageBookCarousel>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 mt-5"
      >
        <div
          class="h-full lg:col-span-1 overflow-y-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100"
        >
          <div class="h-full overflow-y-auto">
            <SidebarBookList></SidebarBookList>
            <SidebarAuthorList></SidebarAuthorList>
          </div>
        </div>
        <div class="lg:col-span-3">
          <div class="font-semibold dark:text-white">Reader Discussions</div>
          <div class="flex flex-row mt-5">
            <img
              class="inline-block h-10 w-10 rounded-full ring-2 ring-white mt-[2px] ml-[2px] mr-5"
              src="https://avatars.githubusercontent.com/u/5966499?v=4"
              alt=""
            />
            <div
              class="bg-white dark:bg-neutral-800 rounded-lg py-4 px-5 border border-neutral-200 dark:border-neutral-700 shadow-md"
            >
              <div
                class="card-description text-neutral-500 dark:text-neutral-400"
              >
                <span class="font-semibold block mb-3 dark:text-white"
                  >John Uber says...</span
                >
                <span class="text-sm block"
                  >The Name of the Wind, also referred to as The Kingkiller
                  Chronicle: Day One, is a heroic fantasy novel written by
                  American author Patrick Rothfuss. It is the first book in the
                  ongoing fantasy trilogy The Kingkiller Chronicle, followed by
                  The Wise Mans Fear. It was published on March 27, 2007, by DAW
                  Books.</span
                >
              </div>
            </div>
          </div>
          <div class="flex flex-row mt-5">
            <img
              class="inline-block h-10 w-10 rounded-full ring-2 ring-white mt-[2px] ml-[2px] mr-5"
              src="https://avatars.githubusercontent.com/u/5966499?v=4"
              alt=""
            />
            <div
              class="bg-white dark:bg-neutral-800 rounded-lg py-4 px-5 border border-neutral-200 dark:border-neutral-700 shadow-md"
            >
              <div
                class="card-description text-neutral-500 dark:text-neutral-400"
              >
                <span class="font-semibold block mb-3 dark:text-white"
                  >John Uber says...</span
                >
                <span class="text-sm block"
                  >The Name of the Wind, also referred to as The Kingkiller
                  Chronicle: Day One, is a heroic fantasy novel written by
                  American author Patrick Rothfuss. It is the first book in the
                  ongoing fantasy trilogy The Kingkiller Chronicle, followed by
                  The Wise Mans Fear. It was published on March 27, 2007, by DAW
                  Books.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
