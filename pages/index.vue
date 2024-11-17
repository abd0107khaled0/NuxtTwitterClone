<template>
  <div>
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-ful">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-[7xl] lg:px-8 lg:gap-5">
          <!-- Left sidebar -->
          <div class="hidden md:block xs:col-span-2 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>

          <!-- main content -->
          <!-- <main class="col-span-12 md:col-span-7 xl:col-span-6 bg-red-500">
            <h1>asd</h1>
          </main>-->

          <!-- right sidebar -->
          <div class="col-span-12 md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0 bg-blue-500">
              <SidebarRight class="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>