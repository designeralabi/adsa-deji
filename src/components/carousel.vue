<script setup>
import { ref } from "vue";
import adsa_1 from "../assets/images/adsa_1.jpeg";
import adsa_2 from "../assets/images/adsa_2.jpg";
import adsa_3 from "../assets/images/adsa_3.jpg";
import adsa_4 from "../assets/images/adsa_4.jpg";
import adsa_17 from "../assets/images/adsa_17.jpeg";
import adsa_6 from "../assets/images/adsa_6.jpeg";
import adsa_19 from "../assets/images/adsa_19.jpeg";
const carousels = ref([
  {
    imgUrl: adsa_1,
    alt: "adsa_1",
  },
  {
    imgUrl: adsa_2,
    alt: "adsa_2",
  },
  {
    imgUrl: adsa_3,
    alt: "adsa_1",
  },
  {
    imgUrl: adsa_4,
    alt: "adsa_1",
  },
  {
    imgUrl: adsa_6,
    alt: "adsa_1",
  },
  {
    imgUrl: adsa_17,
    alt: "adsa_1",
  },
  {
    imgUrl: adsa_19,
    alt: "adsa_19",
  },
]);
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-2"
  >
    <div
      class="w-full h-80"
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
