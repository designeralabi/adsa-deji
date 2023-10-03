<script setup>
import Form from "../components/form.vue";
import { ref } from "vue";

const openForm = ref(false);

const showForm = () => {
  openForm.value = true;
  console.log(openForm.value);
};

const closeForm = () => {
  openForm.value = false;
  console.log(openForm.value);
};
</script>

<template>
  <div class="container mx-auto max-w-7xl bg-white">
    <h2
      class="text-3xl my-8 font-bold flex items-center w-full justify-center text-red-500"
    >
      Upcoming Events
    </h2>
    <div class="flex lg:flex-row lg:items-center lg:gap-x-8 flex-col-reverse px-6 sm:px-16">
      <!-- section_1 -->
      <div class="py-8">
        <h2 class="text-3xl font-bold">Summer 2023 Tournament</h2>
        <h3 class="text-red-500 mt-4">Save The Date!</h3>
        <div class="my-5">
          <h3 class="font-semibold">28th-30th July, 2023</h3>
          <h3 class="font-semibold">Columbia Squash & Athletic Club</h3>
          <h3 class="font-semibold">
            9315 Snowden River Parkway, Columbia Maryland 21046
          </h3>
        </div>
        <button
          class="border bg-transparent border-[#ff4040] hover:text-white px-16 py-3 uppercase outline-none hover:bg-[#d90000] hover:border-none font-bold rounded-md"
          @click="showForm"
        >
          Rsvp
        </button>
      </div>
      <!-- section_2 -->
      <div class="w-full lg:w-3/5">
        <img
          src="../assets/images/adsa_E-flyer.jpg"
          alt="adsa_eflyer"
          class="h-full object-cover w-full"
          height="300"
          width="300"
        />
      </div>
    </div>

    <div v-if="openForm">
      <Form @closeModal="closeForm" />
    </div>
  </div>
</template>
