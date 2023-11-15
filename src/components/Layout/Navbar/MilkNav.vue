<template>
  <nav :class="twMerge('bg-blueberry-700 px-2', colors.primary)">
    <div
      class="2xl:max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto pt-4 px-2"
    >
      <a href="/" id="logo" class="flex items-center">
        <img :src="imageUrl" class="h-8 ml-3 md:h-12" alt="Milk Scan Logo" />
      </a>
      <div class="flex items-center mr-3 md:mr-0 md:order-2">
        <button
          id="user-menu-button"
          type="button"
          :class="
            twMerge(
              'w-auto md:min-w-[180px] inline-flex items-center py-1.5 px-2.5 gap-3 rounded-lg  hover:bg-black/10 focus:bg-black/5',
              colors.primary
            )
          "
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
          @click="isDropdownOpen = !isDropdownOpen"
        >
          <span class="sr-only">Open user menu</span>
          <user-avatar-fallback-initials :profile="profile" />
          <span :class="twMerge('text-blueberry-200 hidden md:block', colors.secondary)">{{
            profile.name
          }}</span>
          <Icon
            :icon="
              isDropdownOpen
                ? 'majesticons:chevron-up'
                : 'majesticons:chevron-down'
            "
            :class="twMerge('w-5 h-5 text-blueberry-200 hidden md:block' , colors.secondary)"
          />
        </button>

        <!-- User Dropdown Menu -->
        <user-dropdown :links="dropdownLinks"></user-dropdown>

        <!-- Collapsable navmenu -->
        <button
          data-collapse-toggle="navbar-user"
          type="button"
          class="inline-flex md:hidden items-center p-2 w-10 h-10 justify-center rounded-lg text-sm text-truffle-500 hover:text-truffle-300 focus:text-truffle-700 focus:bg-truffle-200"
          aria-controls="navbar-user"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <Icon icon="lucide:menu" class="w-6 h-6" />
        </button>
      </div>
      <div
        class="grow items-center justify-between md:justify-end md:pr-16 hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-user"
      >
        <nav-buttons :colors="colors" :links="navLinks" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import NavButtons from "./NavButtons.vue";
import UserDropdown from "./UserDropdown.vue";
import UserAvatarFallbackInitials from "./UserAvatarFallbackInitials.vue";
import { twMerge } from "tailwind-merge";
import { NavButton, Profile, UserDropdownItem } from "./constants";
import { initFlowbite } from "flowbite";
import { PropType, onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  colors: {
    default: () => {
      return {
        primary: "",
        secondary: "",
      };
    },
  },
  logo: {
    type: String,
    default: "Horizontal.svg",
  },
  navLinks: {
    type: Array<NavButton>,
    default: () => [],
  },
  profile: {
    type: Object as PropType<Profile>,
    required: true,
    default: () => <Profile>{ name: "", photo: "" },
  },
  dropdownLinks: {
    type: Array<UserDropdownItem>,
    default: () => [],
  },
});

const imageUrl = new URL(
  `/src/assets/images/logos/svg/${props.logo}`,
  import.meta.url
).href;

onMounted(() => {
  initFlowbite();
});

const isDropdownOpen = ref(false);
</script>
