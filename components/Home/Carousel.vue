<template>
  <div ref="container" class="keen-slider" v-cloak>
    <div class="keen-slider__slide cursor-grab">
      <div class="grid grid-cols-3">
        <HeroCarousel
          bookTitle="Daughter of the Forest"
          bookAuthor="Juliet Marillier"
          bookDescription="Juliet Marillier is a rare talent, a writer who can imbue her characters and her story with such warmth, such heart, that no reader can come away from her work untouched. Daughter of the Forest is a testimony to that talent, a first novel and the beginning of a trilogy like no other: a mixture of history and fantasy, myth and magic, legend and love."
          bookImageUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1441505634i/1562090.jpg"
          bookUrl="title"
        ></HeroCarousel>
        <HeroCarousel
          bookTitle="Name of the Wind"
          bookAuthor="Patrick Rothfuss"
          bookDescription="The Name of the Wind, also referred to as The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Mans Fear. It was published on March 27, 2007, by DAW Books."
          bookImageUrl="https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg"
          bookUrl="title"
        ></HeroCarousel>
        <HeroCarousel
          bookTitle="Bad Blood"
          bookAuthor="John Carreyrou"
          bookDescription="The full inside story of the breathtaking rise and shocking collapse of a multibillion-dollar startup, by the prize-winning journalist who first broke the story and pursued it to the end in the face of pressure and threats from the CEO and her lawyers."
          bookImageUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1523311515i/37976541.jpg"
          bookUrl="title"
        ></HeroCarousel>
      </div>
    </div>
    <div class="keen-slider__slide cursor-grab">
      <div class="grid grid-cols-3 gap-0">
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
          bookImageUrl="https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg"
          bookUrl="title"
        ></HeroCarousel>
        <HeroCarousel
          bookTitle="Name of the Wind"
          bookAuthor="Patrick Rothfuss"
          bookDescription="The Name of the Wind, also referred to as The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Mans Fear. It was published on March 27, 2007, by DAW Books."
          bookImageUrl="https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg"
          bookUrl="title"
        ></HeroCarousel>
      </div>
    </div>
    <div class="keen-slider__slide cursor-grab">
      <div class="grid grid-cols-3 gap-0">
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
          bookImageUrl="https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg"
          bookUrl="title"
        ></HeroCarousel>
        <HeroCarousel
          bookTitle="Name of the Wind"
          bookAuthor="Patrick Rothfuss"
          bookDescription="The Name of the Wind, also referred to as The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Mans Fear. It was published on March 27, 2007, by DAW Books."
          bookImageUrl="https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg"
          bookUrl="title"
        ></HeroCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import { useKeenSlider } from "keen-slider/vue.es";
import "keen-slider/keen-slider.min.css";

export default {
  setup() {
    const [container] = useKeenSlider({
      loop: true,
      useTransform: false,
      renderMode: "performance",
    });
    return { container };
  },
};
</script>
<style>
[v-cloak],
[v-cloak] .v-cloak--hidden {
  display: none !important;
}
</style>
