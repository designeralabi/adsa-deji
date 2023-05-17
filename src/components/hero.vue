<script setup>
import ButtonVue from "./button.vue";
</script>

<template>
  <div
    class="mx-auto container max-w-7xl flex items-center h-screen justify-between"
  >
    <div class="w-[600px]">
      <h1
        class="text-5xl leading-snug font-bold flex items-center justify-center"
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
      <ButtonVue class="mt-10" />
    </div>
    <div class="">
      <div class="flex items-center justify-center w-[350px] relative">
        <img
          src="../assets/images/adsa_2.jpg"
          alt="adsa_2"
          class="block object-cover h-[500px] rounded-xl"
        />
      </div>
    </div>
  </div>
</template>
