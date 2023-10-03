

<template>
  <div class="bg-black/40 fixed inset-0 flex items-center justify-center w-full z-50">
    <form class="bg-white py-12 px-8 w-[600px] relative" @submit.prevent="sendEmail">
      <button class="absolute hover:rotate-90 w-8 h-8 bg-red-600 text-white hover:ease-in-out transition-transform cursor-pointer top-4 right-7"
              @click="closeModal">X</button>
      <h2 class="text-3xl mb-8 font-bold uppercase">Rsvp</h2>

      <div class="flex items-center justify-between gap-x-6">
        <div class="flex flex-col my-2 w-full">
          <label for="name" class="mb-3">First Name</label>
          <input
              class="bg-transparent outline-none border p-3 w-full"
              type="text"
              placeholder="firstName"
              required
              name="first_name"
              v-model="first_name"
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
              v-model="last_name"
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
              v-model="user_email"
          />
        </div>
        <div class="flex flex-col my-2 w-full">
          <label for="tel" class="mb-3">Tel</label>
          <input
              type="number"
              placeholder="phoneNumber"
              class="bg-transparent border outline-none p-3 w-full"
              name="user_number"
              v-model="user_number"
          />
        </div>
      </div>

      <div class="flex flex-col gap-y-2 mt-6">
        <Label for="attendance">Are you going to attend?</Label>
        <div class="flex items-center gap-4">
          <label>
            <input name="attendance" required type="radio" v-model="attendance" value="will attend">
            Will attend
          </label>

          <label>
            <input name="attendance" required type="radio" v-model="attendance" value="will not attend">
            Will not attend
          </label>
        </div>
      </div>

      <div class="flex flex-col gap-y-2 mt-6">
        <label for="comments">Comments</label>
        <textarea name="comments" rows="8" cols="15" v-model="comments" class="bg-transparent border outline-none p-3 w-full"/>
      </div>

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

<script>
import emailjs from "@emailjs/browser"

export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      user_email: '',
      user_number: '',
      message: "",
      attendance: "",
      comments: ""
    };
  },
  props: {
    closeParameter: {
      type: String,
      required: true,
    },
  },
  methods: {
    sendEmail() {
        emailjs.send("service_umhdt8c", "template_7js1kjb", {
          from_name: this.first_name + ' ' + this.last_name,
          contact_email: this.user_email,
          contact_phone: this.user_number,
          to_name: "ADSA",
          message: `
        Email: ${this.user_email},
        Phonenumber: ${this.user_number}

        Mr/Mrs ${this.first_name + ' ' + this.last_name} ${this.attendance} the event.

        ${this.comments}
        `
        }, "GMbZBdJQAsJUrwDRC").then((res)=> {
          console.log(res)
          this.closeModal()
        })
    },
    closeModal() {
      this.$emit('closeModal');
    },
    setGoing(going) {
      this.isGoing = going;
    }
  },
};
</script>
