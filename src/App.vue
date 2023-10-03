<script setup>
import { RouterLink, RouterView } from "vue-router";
// import MenuIcon from "vue-material-design-icons/Menu.vue";
import { BxMenuAltRight } from "@kalimahapps/vue-icons";
import { CgClose } from "@kalimahapps/vue-icons";
import Footer from "./components/footer.vue";
import { ref } from "vue";
const openMenu = ref(true);
const showMenu = () => {
  openMenu.value = false;
};
const closeMenu = () => {
  openMenu.value = !openMenu.value;
};
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
      <BxMenuAltRight
        v-if="openMenu"
        class="w-9 h-12 cursor-pointer"
        @click="showMenu"
      />
      <CgClose
        v-else
        @click="closeMenu"
        class="w-9 h-8 cursor-pointer"
      />

      <nav
        class="lg:flex items-center justify-between capitalize space-x-16 text-lg hidden"
      >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/gallery">gallery</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <Footer />
</template>
