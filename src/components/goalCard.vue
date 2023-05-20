<script setup>
defineProps({
  content: String,
});
</script>

<template>
  <div
    class="bg-white shadow-lg rounded-xl p-6 w-56 text-center h-48 hover:scale-125 ease-linear transition-all"
  >
    {{ content }}
  </div>
</template>
