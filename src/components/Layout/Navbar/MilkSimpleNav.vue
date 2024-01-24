<template>
  <div
    :class="
      twMerge(
        'simple-nav--container sticky top-0 left-0 3xl:max-w-screen-3xl bg-white w-full h-auto px-3 md:!px-6 py-2 inline-flex gap-4 md:!gap-6 border border-b',
        styling.container
      )
    "
  >
    <div
      :class="
        twMerge(
          'simple-nav--logo-wrapper flex items-center w-24 md:!w-32 h-auto',
          styling.logo
        )
      "
    >
      <a href="/">
        <img :src="imageUrl" class="w-full h-auto" alt="Milk Scan Logo" />
      </a>
    </div>
    <div
      class="simple-nav--content-wrapper grow inline-flex items-center gap-2 md:!gap-4 overflow-x-auto"
    >
      <div
        :class="
          twMerge('simple-nav--content--main h-full grow', styling.content)
        "
      >
        <slot></slot>
      </div>
      <div
        class="simple-nav--content--sign inline-flex gap-2 text-sm md:!text-base"
      >
        <router-link
          v-for="(navLink, index) in navLinks"
          v-bind:key="index"
          :to="navLink.link"
          :class="
            twMerge(
              'inline-flex items-center gap-2 px-5 py-2 rounded-md tracking-wide text-blueberry-800 hover:text-blueberry-600 active:text-blue-600 bg-transparent hover:bg-silver-100 active:bg-blue-600/10',
              styling.buttons.tertiary
            )
          "
        >
          <span class="tracking-wide">{{ navLink.label }}</span>
        </router-link>
        <router-link
          :to="ctaButton.link"
          :class="
            twMerge(
              'inline-flex items-center gap-2 px-5 py-2 rounded-md text-silver-50 tracking-wide border border-blueberry-700 hover:border-blueberry-500 active:border-blue-600 bg-blueberry-700 hover:bg-blueberry-500 active:bg-blue-600',
              styling.buttons.primary
            )
          "
        >
          <span class="">{{ ctaButton.label }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { twMerge } from "tailwind-merge";
import { NavButton } from "./constants";


type Styling = {
  container: string;
  logo: string;
  content: string;
  buttons: {
    primary: string;
    tertiary: string;
  };
};

const props = defineProps({
  styling: {
    type: Object as PropType<Styling>,
    default: () => {
      return {
        container: "",
        logo: "",
        content: "",
        buttons: {
          primary: "",
          tertiary: "",
        },
      };
    },
  },
  logo: {
    type: String,
    default: "Horizontal.svg",
  },
  ctaButton: {
    type: Object as PropType<NavButton>,
    default: () => {
      return {
        label: "Inscreva-se",
        link: "/register",
      };
    },
  },
  navLinks: {
    type: Array<NavButton>,
    default: () => [{ label: "Login", link: "/login" }],
  },
});

const imageUrl = new URL(
  `/src/assets/images/logos/svg/${props.logo}`,
  import.meta.url
).href;
</script>
