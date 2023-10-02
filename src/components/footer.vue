<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="bg-black text-white py-24">
    <div class="container mx-auto max-w-7xl px-6 lg:px-0">
      <div class="flex flex-col lg:flex-row justify-between">
        <div>
          <h3 class="text-gray-500 font-bold text-xl">Contact us</h3>
          <div class="font-semibold mt-4 space-y-3">
            <h3>9315 Snowden river parkway Columbia Maryland 21046</h3>
            <h4>info@adsasquash.org</h4>
            <h4>+1 (443) 538-0247</h4>
          </div>
        </div>
      </div>

      <nav
        class="lg:grid grid-cols-3 capitalize text-lg bg-white rounded-full p-2 w-[400px] mx-auto my-12 hidden"
      >
        <RouterLink
          to="/"
          class="px-8 h-12 flex items-center justify-center"
          >Home</RouterLink
        >
        <RouterLink
          to="/about"
          class="px-8 h-12 flex items-center justify-center"
          >About</RouterLink
        >
        <RouterLink
          to="/gallery"
          class="px-8 h-12 flex items-center justify-center"
          >gallery</RouterLink
        >
      </nav>
      <hr class="border-gray-400 border-t-1 my-16 hidden lg:block" />
      <div
        class="bg-[rgba(13, 25, 57, 1)] flex justify-between items-center mt-8"
      >
        <p>
          ©ADSA 2023. African Diaspora Squash Association All Rights Reserved.
        </p>
        <div class="space-x-8 lg:flex items-center hidden">
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  </div>
</template>
