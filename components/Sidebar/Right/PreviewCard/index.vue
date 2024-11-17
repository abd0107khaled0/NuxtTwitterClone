<template>
  <div class="m-2 border-2 border-gray-200 dark:bg-dim-400 bg-white rounded-lg p-3 " :class="twitterBorderColor">
    <h1
    class="p-3 text-xl font-extrabold text-gray-900 border-b text-black dark:text-white "
    :class="twitterBorderColor"
    >{{props.title}}</h1>

    <slot></slot>
    <div class="p-3 text-sm text-blue-400 cursor-pointer" :class="defaultTransition">Show More</div>
  </div>
</template>

<script setup>
import useTailwindConfig from "~/composable/useTailwindConfig";

const { twitterBorderColor,defaultTransition } = useTailwindConfig();
const props = defineProps({
  title: {
    typeof: "string",
    required: true
  }
});
</script>

<style lang="scss" scoped>
</style>