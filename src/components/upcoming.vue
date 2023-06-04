<script setup>
import Form from "../components/form.vue";
import {ref} from "vue";

const openForm = ref(false)

const showForm = () => {
  openForm.value = true
  console.log(openForm.value)
};

const closeForm= () => {
  openForm.value = false
  console.log(openForm.value)
}

</script>

<template>
  <div class="container mx-auto max-w-7xl py-16">
    <h2 class="text-5xl flex items-center justify-center mb-12 font-bold">
      Upcoming Events
    </h2>
    <div class="flex items-center justify-between">
      <!-- section_1 -->
      <div class="p-16">
        <h2 class="text-4xl font-bold">Summer 2023 Tournament</h2>
        <h3>Save The Date!</h3>
        <div class="my-5">
          <h3 class="font-semibold">28th-30th July, 2023</h3>
          <h3 class="font-semibold">
            9315 Snowden River Parkway, Columbia Maryland 21046
          </h3>
        </div>
        <button
          class="border-2 bg-transparent border-[#ff4040] hover:text-white px-16 py-3 uppercase outline-none hover:bg-[#d90000] font-bold rounded-md mt-11"
          @click="showForm"
        >
          Rsvp
        </button>
      </div>
      <!-- section_2 -->
      <div class="w-[500px] bg-red-400">
        <img
          src="../assets/images/adsa_E-flyer.jpg"
          alt="adsa_eflyer"
          class="h-full object-cover w-full"
          height="300"
          width="700"
        />
      </div>
    </div>

    <div v-if="openForm">
     <Form @closeModal="closeForm"/>
    </div>
  </div>
</template>
