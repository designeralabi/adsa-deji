<script setup>
import { ref } from "vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
import emailjs from "@emailjs/browser";

const formVal = ref({
  first_name: "",
  last_name: "",
  email: "",
  num: "",
  message: "",
});

function sendEmail() {
  emailjs
    .sendForm(
      "service_aq9s41h",
      "template_a1quf0r",
      this.$ref.formVal,
      "soaxGlokqKI6-igPc"
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  formVal({
    first_name: "",
    last_name: "",
    email: "",
    num: "",
    message: "",
  });
}
</script>

<template>
  <div
    class="bg-black/40 absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center w-full z-50"
  >
    <form
      class="bg-white py-12 px-8 w-[600px] relative"
      ref="formVal"
      @submit.prevent="sendEmail"
    >
      <CloseIcon
        class="absolute hover:rotate-90 hover:ease-in-out transition-transform cursor-pointer top-4 right-7"
        size="32"
      />
      <h2 class="text-3xl mb-8 font-bold">Rsvp</h2>

      <div class="flex items-center justify-between gap-x-6">
        <div class="flex flex-col my-2 w-full">
          <label for="name" class="mb-3">First Name</label>
          <input
            class="bg-transparent outline-none border p-3 w-full"
            type="text"
            placeholder="firstName"
            required
            name="first_name"
          />
        </div>
        <div class="flex flex-col my-2 w-full">
          <label for="lastname" class="mb-3">Last Name</label>
          <input
            type="text"
            class="bg-transparent outline-none border p-3 w-full"
            placeholder="lastName"
            required
            name="last_name"
          />
        </div>
      </div>

      <div class="flex items-center justify-between mt-2 gap-x-6">
        <div class="flex flex-col my-2 w-full">
          <label for="email" class="mb-3">Email</label>
          <input
            type="email"
            placeholder="enter email here"
            class="bg-transparent outline-none border p-3 w-full"
            required
            name="user_email"
          />
        </div>
        <div class="flex flex-col my-2 w-full">
          <label for="tel" class="mb-3">Tel</label>
          <input
            type="number"
            placeholder="phoneNumber"
            class="bg-transparent border outline-none p-3 w-full"
            name="user_number"
          />
        </div>
      </div>
      <textarea
        name="message"
        class="w-full outline-none p-3 border mt-8 h-40"
      ></textarea>

      <button
        class="bg-transparent border border-black rounded-md text-black p-3 font-semibold hover:bg-black hover:text-white transition-colors ease-in mt-5"
        value="send"
        type="submit"
      >
        Send Message
      </button>
    </form>
  </div>
</template>
