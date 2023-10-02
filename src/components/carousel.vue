<script setup>
import { ref } from "vue";
const carousels = ref([
  {
    imgUrl: "/src/assets/images/adsa_1.jpeg",
    alt: "adsa_1",
  },
  {
    imgUrl: "../assets/images/adsa_2.jpg",
    alt: "adsa_2",
  },
  {
    imgUrl: "../assets/images/adsa_3.jpg",
    alt: "adsa_1",
  },
  {
    imgUrl: "../assets/images/adsa_4.jpg",
    alt: "adsa_1",
  },
  {
    imgUrl: "../assets/images/adsa_17.jpeg",
    alt: "adsa_1",
  },
  {
    imgUrl: "../assets/images/adsa_6.jpeg",
    alt: "adsa_1",
  },
  {
    imgUrl: "../assets/images/adsa_19.jpeg",
    alt: "adsa_19",
  },
]);
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-2">
    <div
      class="w-[520px] h-80"
      v-for="carousel in carousels"
      :key="carousel.alt"
    >
      <img
        :src="carousel.imgUrl"
        :alt="carousel.alt"
        width="300"
        height="300"
        class="object-cover h-full w-full"
      />
    </div>
  </div>
</template>
