<script setup>
import { RouterLink, RouterView } from "vue-router";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import Footer from "./components/footer.vue";
</script>

<template>
  <header class="bg-white shadow-lg">
    <div
      class="flex items-center py-4 max-w-7xl justify-between container mx-auto px-6 lg:px-0"
    >
      <img
        src="./assets/logos/nasa_logo.jpeg"
        width="80"
        height="80"
        alt="rugby_logo"
      />
      <MenuIcon size="32" class="cursor-pointer" @click="show" />

      <nav
        class="lg:flex items-center justify-between capitalize space-x-16 text-lg hidden"
      >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/gallery">gallery</RouterLink>
      </nav>
      <button
        class="border-2 bg-[#ff4040] border-none text-white px-8 py-2 capitalize outline-none hover:bg-[#d90000] font-bold rounded-md hidden lg:block"
      >
        donate
      </button>
    </div>
  </header>

  <RouterView />
  <Footer />
</template>
