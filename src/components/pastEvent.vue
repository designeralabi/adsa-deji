<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex bg-[#6e58e2] items-center px-6 lg:px-0">
    <div class="justify-between flex mx-auto container max-w-7xl">
      <div class="w-[1800px] bg-red-400">
        <img
          src="../assets/images/adsa_19.jpeg"
          alt="adsa_team_19"
          class="h-full object-cover w-full"
          height="300"
          width="700"
        />
      </div>
      <!-- content -->
      <div class="text-white p-16 flex items-start justify-center flex-col">
        <h3 class="text-4xl mb-10 font-bold">
          Squash Summer Retreat 2022 Maryland, USA
        </h3>
        <p>
          As a dedicated (and growing!) community of Squash fans, we came
          together to create an amazing hub for people from all over to share
          and interact. Check out our latest updates and stay in the loop.
        </p>
        <button
          class="border-2 bg-[#ff4040] border-none text-white px-8 py-3 capitalize outline-none hover:bg-[#d90000] font-bold rounded-md mt-11"
        >
          <RouterLink to="/gallery" class="text-white">
            view Gallery</RouterLink
          >
        </button>
      </div>
    </div>
  </div>
</template>
