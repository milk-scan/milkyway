<template>
  <div
    class="greetings inline-flex gap-1 font-bold text-3xl md:text-4xl"
  >
    <span :class="twMerge('text-blueberry-100 mr-0.5', colors.tertiary)">
      {{ greetings }},
    </span>
    <span :class="twMerge('text-tropical-100 mr-0.5', colors.quaternary)">
      {{ splitName(props.profile.name) }}
    </span>
    <span :class="twMerge('text-blueberry-100', colors.tertiary)"> ! </span>
  </div>
  <span
    :class="
      twMerge(
        'text-blueberry-200',
        colors.primary,
        'text-lg md:text-xl font-normal'
      )
    "
  >
    {{ greetingsSubtitle.subtitle }}
    <span
      :class="
        twMerge(
          'text-blueberry-100',
          colors.tertiary,
          'text-lg md:text-xl font-normal'
        )
      "
    >
      {{ greetingsSubtitle.farm }}
    </span></span
  >
</template>

<script setup lang="ts">
import { Profile } from "../Layout/Navbar/constants";
import { GreetingsSubtitle } from "./constants";
import { computed, PropType } from "vue";
import { greetings as getGreetings } from "../../utils/dateTimeUtils";
import { twMerge } from "tailwind-merge";
const props = defineProps({
  colors: {
    default: () => {
      return {
        primary: "",
        secondary: "",
        tertiary: "",
        quaternary: "",
      };
    },
  },
  profile: {
    type: Object as PropType<Profile>,
    required: true,
    default: () => <Profile>{ name: "" },
  },
  greetingsSubtitle: {
    type: Object as PropType<GreetingsSubtitle>,
    required: true,
    default: () =>
      <GreetingsSubtitle>{
        subtitle: "Veja detalhes da",
        farm: "Fazenda da Lua",
      },
  },
});

const splitName = (name: string) => {
  return name.split(" ")[0];
};

const greetings = computed(() => {
  return getGreetings();
});
</script>
