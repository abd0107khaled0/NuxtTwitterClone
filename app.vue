<template>
  <div :class="{'dark':darkMode}">
   <NuxtPage />
  </div>
</template>

<script setup>
// import { ref } from 'vue';
const darkMode = ref(true);
</script>
