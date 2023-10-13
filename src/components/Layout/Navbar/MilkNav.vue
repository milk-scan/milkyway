<template>
  <nav
    :class="
      twMerge(
        'bg-blueberry-700 border-gray-200 dark:bg-gray-900',
        colors.primary
      )
    "
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 px-2"
    >
      <a href="/" id="logo" class="flex items-center">
        <img
          src="@/assets/images/logos/svg/Horizontal.svg"
          class="h-8 ml-3 md:h-12"
          alt="Milk Scan Logo"
        />
      </a>
      <div class="flex items-center md:order-2">
        <button
          type="button"
          class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full" :src="picPath" alt="user photo" />
        </button>
        <!-- Dropdown menu -->
        <div
          :class="
            twMerge(
              'z-50 hidden my-4 text-base list-none bg-blueberry-700 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600',
              colors.primary
            )
          "
          id="user-dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white"
              >Bonnie Green</span
            >
            <span
              class="block text-sm text-gray-500 truncate dark:text-gray-400"
              >name@flowbite.com</span
            >
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Earnings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
        <button
          data-collapse-toggle="navbar-user"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-user"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <nav-buttons
       :colors="colors"
       :links="links"
       />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import NavButtons from "./NavButtons.vue";
import { NavButton } from "./constants";
import {initFlowbite} from 'flowbite';
import { onMounted } from "vue";

defineProps({
  picPath: {
    type: String,
    default: "",
  },
  links: {
    type: Array<NavButton>,
    default: () => [],
  },
  colors: {
    default: () => {
      return {
        primary: "bg-blueberry-700",
        secondary: "bg-silver-200",
      };
    },
  },
});

onMounted(() => {
    initFlowbite()  
})
</script>
