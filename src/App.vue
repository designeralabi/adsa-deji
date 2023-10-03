<script setup>
import { RouterLink, RouterView } from "vue-router";
// import MenuIcon from "vue-material-design-icons/Menu.vue";
import { BxMenuAltRight } from "@kalimahapps/vue-icons";
import { CgClose } from "@kalimahapps/vue-icons";
import Footer from "./components/footer.vue";
import { ref } from "vue";
const openMenu = ref(false);
const showMenu = () => {
  openMenu.value = !openMenu.value;
};

const navLinks = ref([
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/gallery",
    title: "Gallery",
  },
]);
</script>

<template>
  <header class="bg-white shadow-lg">
    <div
      class="flex items-center relative py-4 max-w-7xl justify-between container mx-auto px-6 lg:px-16"
    >
      <img
        src="./assets/logos/nasa_logo.jpeg"
        width="80"
        height="80"
        alt="rugby_logo"
      />

      <div class="z-50 lg:hidden">
        <CgClose
          v-if="openMenu"
          @click="showMenu"
          class="w-9 h-8 cursor-pointer"
        />
        <BxMenuAltRight
          v-else
          class="w-9 h-12 lg:hidden cursor-pointer"
          @click="showMenu"
        />
      </div>

      <nav
        v-show="openMenu"
        class="flex-col fixed top-0 bg-white h-[45%] left-0 right-0 flex items-center capitalize text-lg pt-24 space-y-5 ease-in-out transition-all"
      >
        <RouterLink
          v-for="navlink in navLinks"
          :to="navlink.url"
          class="hover:bg-purple-600 hover:text-white rounded-full flex items-center justify-center h-12 px-8"
          >{{ navlink.title }}</RouterLink
        >
      </nav>
      <!-- large screen -->
      <nav
        class="bg-white h-[45%] hidden lg:flex items-center capitalize text-lg ease-in-out transition-all"
      >
        <RouterLink
          v-for="navlink in navLinks"
          :to="navlink.url"
          class="hover:bg-purple-600 hover:text-white rounded-full flex items-center justify-center h-12 px-8"
          >{{ navlink.title }}</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
  <Footer />
</template>
