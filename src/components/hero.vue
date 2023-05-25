<script setup>
import ButtonVue from "./button.vue";
</script>

<template>
  <div
    class="mx-auto container max-w-7xl flex items-center flex-col lg:flex-row h-screen px-6 py-24 lg:p-0 justify-between"
  >
    <div class="w-full lg:w-[600px]">
      <h1
        class="text-3xl lg:text-5xl leading-snug font-bold flex items-center justify-center"
      >
        The African Diaspora Squash Association
      </h1>
      <p class="mt-12">
        The African Diaspora Squash Association (ADSA Squash) is a non-profit
        organization committed to the development and promotion of squash
        amongst young people in Africa. Our mission is to provide access to the
        sport of squash to underprivileged communities and to encourage the
        growth of squash in Africa. The organization is run by a dedicated team
        of volunteers who are passionate about the sport and the impact it can
        have on young people's lives.
      </p>
      <ButtonVue class="my-10 lg:mb-0 lg:mt-10" />
    </div>
    <div
      class="flex items-center justify-center lg:w-[550px] w-full lg:h-[500px]"
    >
      <img
        src="../assets/images/adsa_12.jpeg"
        alt="adsa_2"
        height="500"
        width="400"
        class="object-cover h-full w-full rounded-xl"
      />
    </div>
  </div>
</template>
