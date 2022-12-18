<template>
  <div class="h-full w-full">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-0">
      <HeroCarousel
        bookTitle="Name of the Wind"
        bookAuthor="Patrick Rothfuss"
        bookDescription="The Name of the Wind, also referred to as The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Mans Fear. It was published on March 27, 2007, by DAW Books."
        bookImageUrl="https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg"
        bookUrl="title"
      ></HeroCarousel>
      <HeroCarousel
        bookTitle="Name of the Wind"
        bookAuthor="Patrick Rothfuss"
        bookDescription="The Name of the Wind, also referred to as The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Mans Fear. It was published on March 27, 2007, by DAW Books."
        bookImageUrl="https://images-na.ssl-images-amazon.com/images/I/61OTY2-4anL.jpg"
        bookUrl="title"
      ></HeroCarousel>
      <HeroCarousel
        bookTitle="Name of the Wind"
        bookAuthor="Patrick Rothfuss"
        bookDescription="The Name of the Wind, also referred to as The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Mans Fear. It was published on March 27, 2007, by DAW Books."
        bookImageUrl="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg"
        bookUrl="title"
      ></HeroCarousel>
    </div>
    <div class="h-full grid grid-cols-1 lg:grid-cols-4">
      <div class="h-full lg:col-span-1 overflow-y-auto px-5 lg:pr-0 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        <div class="h-full overflow-y-auto">
          <SidebarBookList></SidebarBookList>
          <SidebarAuthorList></SidebarAuthorList>
        </div>
      </div>
      <div class="h-full w-full lg:col-span-3 overflow-y-auto px-5 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900">
        <div class="sticky z-10 top-0 left-0 right-0 overflow-hidden flex flex-row items-center justify-between bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 mb-5">
          <div class="font-semibold dark:text-white">Popular by Genre</div>
          <div class="h-full flex flex-row">
            <div
              class="h-full dark:text-white flex flex-col cursor-pointer dark:hover:bg-neutral-800"
            >
              <div class="py-2.5 px-2.5">All Genres</div>
              <div
                class="w-full h-[2px] bg-rose-600 shadow-md shadow-rose-600/50"
              ></div>
            </div>
            <div
              class="h-full border-b-2 border-transparent dark:text-white flex items-center py-2.5 px-2.5 cursor-pointer dark:hover:bg-neutral-800"
            >
              Fiction
            </div>
            <div
              class="h-full border-b-2 border-transparent dark:text-white flex items-center py-2.5 px-2.5 cursor-pointer dark:hover:bg-neutral-800"
            >
              Sci-Fi
            </div>
            <div
              class="h-full border-b-2 border-transparent dark:text-white flex items-center py-2.5 px-2.5 cursor-pointer dark:hover:bg-neutral-800"
            >
              Fantasy
            </div>
            <div
              class="h-full border-b-2 border-transparent dark:text-white flex items-center py-2.5 px-2.5 cursor-pointer dark:hover:bg-neutral-800"
            >
              Horror
            </div>
            <div
              class="h-full border-b-2 border-transparent dark:text-white flex items-center py-2.5 px-2.5 cursor-pointer dark:hover:bg-neutral-800"
            >
              History
            </div>
            <div
              class="h-full border-b-2 border-transparent dark:text-white flex items-center py-2.5 px-2.5 cursor-pointer dark:hover:bg-neutral-800"
            >
              Romance
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-5 pt-5">
          <BookCard
            bookTitle="Stay And Fight"
            bookAuthor="Lucy Parker"
            bookDescription="Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years."
            bookImageUrl="https://images-na.ssl-images-amazon.com/images/I/71PL7BiZ5NL.jpg"
            bookUrl="title"
          ></BookCard>
          <BookCard
            bookTitle="Name of the Wind"
            bookAuthor="Patrick Rothfuss"
            bookDescription="The Name of the Wind, also referred to as The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Mans Fear. It was published on March 27, 2007, by DAW Books."
            bookImageUrl="https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg"
            bookUrl="title"
          ></BookCard>
          <BookCard
            bookTitle="Stay And Fight"
            bookAuthor="Lucy Parker"
            bookDescription="Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years."
            bookImageUrl="https://images-na.ssl-images-amazon.com/images/I/71PL7BiZ5NL.jpg"
            bookUrl="title"
          ></BookCard>
          <BookCard
            bookTitle="Name of the Wind"
            bookAuthor="Patrick Rothfuss"
            bookDescription="The Name of the Wind, also referred to as The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Mans Fear. It was published on March 27, 2007, by DAW Books."
            bookImageUrl="https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg"
            bookUrl="title"
          ></BookCard>
          <BookCard
            bookTitle="Name of the Wind"
            bookAuthor="Patrick Rothfuss"
            bookDescription="The Name of the Wind, also referred to as The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Mans Fear. It was published on March 27, 2007, by DAW Books."
            bookImageUrl="https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg"
            bookUrl="title"
          ></BookCard>
          <BookCard
            bookTitle="Stay And Fight"
            bookAuthor="Lucy Parker"
            bookDescription="Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years."
            bookImageUrl="https://images-na.ssl-images-amazon.com/images/I/71PL7BiZ5NL.jpg"
            bookUrl="title"
          ></BookCard>
          <BookCard
            bookTitle="Stay And Fight"
            bookAuthor="Lucy Parker"
            bookDescription="Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years."
            bookImageUrl="https://images-na.ssl-images-amazon.com/images/I/71PL7BiZ5NL.jpg"
            bookUrl="title"
          ></BookCard>
          <BookCard
            bookTitle="Name of the Wind"
            bookAuthor="Patrick Rothfuss"
            bookDescription="The Name of the Wind, also referred to as The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Mans Fear. It was published on March 27, 2007, by DAW Books."
            bookImageUrl="https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg"
            bookUrl="title"
          ></BookCard>
        </div>
      </div>
    </div>
  </div>
</template>
