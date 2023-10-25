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
      <div class="flex items-center mr-3 md:mr-0 md:order-2">
        <button
          type="button"
          :class="
            twMerge(
              'inline-flex items-center py-1.5 px-2.5 rounded-lg gap-3 min-w-[180px] hover:bg-black/5',
              colors.primary
            )
          "
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
          @click="isDropdownOpen = !isDropdownOpen"
        >
          <span class="sr-only">Open user menu</span>
          <user-avatar-fallback-initials :profile="profile" />
          <span class="text-blueberry-900">{{ profile.name }}</span>
          <Icon
            :icon="
              isDropdownOpen
                ? 'majesticons:chevron-up'
                : 'majesticons:chevron-down'
            "
            class="w-5 h-5 text-blueberry-900"
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

defineProps({
  profile: {
    type: Object as PropType<Profile>,
    required: true,
    default: () => <Profile>{ name: "", photo: "" },
  },
  navLinks: {
    type: Array<NavButton>,
    default: () => [],
  },
  dropdownLinks: {
    type: Array<UserDropdownItem>,
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
  initFlowbite();
});

const isDropdownOpen = ref(false);
</script>
