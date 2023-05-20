<script setup>
defineProps({
  content: String,
  author: String,
});
</script>

<template>
  <div class="bg-white shadow-xl rounded-lg p-8">
    {{ content }}
    <h4 class="mt-7 font-bold">{{ author }}</h4>
  </div>
</template>
