<template>
  <div :class="{'dark':darkMode}">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-ful">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-[7xl] lg:px-8 lg:gap-5">
          <!-- Left sidebar -->
          <div class="hidden xs:block xs:col-span-1 xl:col-span-1">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>

          <!-- main content -->

          <!-- right sidebar -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
const darkMode = ref(false);
</script>
