<template>
  <div class="h-screen flex flex-col">
    <div
      class="p-2 my-2 hover:bg-blue-50 hover:rounded-full transition-all duration-75 w-min dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <NuxtLink to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </NuxtLink>
    </div>

    <div class="mt-2 space-y-8">
      <SidebarLeftTab
        v-for="(item,index) in userMenu"
        :key="index + Math.random()"
        :active="item.active"
      >
        <template v-slot:icon>
          <div>
            <component :is="item.componentName" />
          </div>
        </template>

        <template v-slot:name>
          <div>{{item.title}}</div>
        </template>
      </SidebarLeftTab>
    </div>
  </div>
</template>

<script setup>
import useTailwindConfig from "../../../composable/useTailwindConfig.js"; // Composable;
import { HomeIcon } from "@heroicons/vue/solid";

import {
  BellIcon,
  HashtagIcon,
  InboxIcon,
  BookOpenIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  DotsCircleHorizontalIcon
} from "@heroicons/vue/outline";


const { defaultTransition } = useTailwindConfig();
const userMenu = reactive([
  {
    title: "Home",
    componentName: HomeIcon,
    active: true
  },
  {
    title: "Explore",
    componentName: HashtagIcon,
    active: false
  },
  {
    title: "Notifications",
    componentName: BellIcon,
    active: false
  },
  {
    title: "Messages",
    componentName: InboxIcon,
    active: false
  },
  {
    title: "Bookmarks",
    componentName: InboxIcon,
    active: false
  },
  {
    title: "List",
    componentName: DocumentTextIcon,
    active: false
  },
  {
    title: "Profile",
    componentName: UserIcon,
    active: false
  },
  {
    title: "More",
    componentName: DotsCircleHorizontalIcon,
    active: false
  }
]);
</script>

<style scoped>
</style>