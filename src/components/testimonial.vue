<script setup>
import Card from "./card.vue";
</script>

<template>
  <div class="bg-[#f5f6f7] pt-12 pb-24">
    <div class="max-w-7xl mx-auto container px-7 lg:px-0">
      <div class="my-16">
        <h2
          class="text-3xl text-center lg:text-5xl font-bold flex item-center justify-center my-8"
        >
          Testimonials
        </h2>
        <h3
          class="flex items-center justify-center text-xl font-semibold my-6 tracking-wider"
        >
          Hear What Others Have to Say
        </h3>
      </div>

      <div
        class="flex flex-col lg:flex-row items-center space-y-7 lg:space-y-0 lg:space-x-7"
      >
        <Card
          content="We are very proud to be associated with The African Diaspora Squash Association in their endeavour, they are doing an excellent job and have all possible support from us
"
          author="Tayo Koleosho"
        />
        <Card
          content="I have found the The African Diaspora Squash Association to be a fantastic and very enjoyable fan club. I have made a considerable improvement, the skills I have acquired have benefited my squash game. I would highly recommend it to any player looking to do the same.
"
          author="​Kris Michaels"
        />
        <Card
          content="I’ve always loved playing squash, but after having lessons at the Summer Retreat, it’s not only improved my game but made me appreciate the sport on a whole new level. 

"
          author="​Frankie Bolder"
        />
      </div>
    </div>
  </div>
</template>
