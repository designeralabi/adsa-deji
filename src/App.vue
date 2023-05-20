<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/footer.vue";
</script>

<template>
  <header class="bg-white shadow-lg">
    <div
      class="flex items-center py-2 max-w-7xl justify-between container mx-auto"
    >
      <img
        src="./assets/logos/nasa_logo.jpeg"
        width="80"
        height="80"
        alt="rugby_logo"
      />

      <nav
        class="flex items-center justify-between capitalize space-x-16 text-lg"
      >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/gallery">gallery</RouterLink>
      </nav>
      <button
        class="border-2 bg-[#ff4040] border-none text-white px-8 py-2 capitalize outline-none hover:bg-[#d90000] font-bold rounded-md"
      >
        donate
      </button>
    </div>
  </header>

  <RouterView />
  <Footer />
</template>
