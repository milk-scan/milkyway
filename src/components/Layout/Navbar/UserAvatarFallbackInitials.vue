<template>
  <AvatarRoot
    :class="
      twMerge(
        'w-[30px] h-[30px] flex overflow-hidden items-center justify-center rounded-full select-none',
        avatarStyle.root
      )
    "
    alt="user photo"
  >
    <!--   <AvatarImage src="@\assets\images\profilepic\profilepicAndrea.jpeg" 
    asChild>   
    </AvatarImage> -->
    <img
      v-if="!showFallback"
      :class="
        twMerge(
          'h-full w-full rounded-[inherit] object-cover',
          avatarStyle.image
        )
      "
      :src="profile.photo"
      :alt="profile.name"
      @error="error"
    />
    <AvatarFallback
      v-else
      :class="
        twMerge(
          'leading-1 flex h-full w-full items-center justify-center bg-blueberry-400 text-white font-light text-xs',
          avatarStyle.fallback
        )
      "
      :delay-ms="300"
    >
      {{ initials }}
    </AvatarFallback>
  </AvatarRoot>
</template>

<script lang="ts" setup>
import { computed, PropType, ref } from "vue";
import { twMerge } from "tailwind-merge";
import { AvatarFallback, AvatarRoot } from "radix-vue";
import { Profile } from "./constants";

type AvatarStyle = {
  root: string;
  image: string;
  fallback: string;
};

const props = defineProps({
  profile: {
    type: Object as PropType<Profile>,
    required: true,
    default: () => <Profile>{ name: "", photo: "" },
  },
  avatarStyle: {
    type: Object as PropType<AvatarStyle>,
    default: () => <AvatarStyle>{ root: "", image: "", fallback: "" },
  },
});

const showFallback = ref(false);

const initials = computed(() => {
  const name = props.profile.name;

  return name
    .match(/(\b\S)?/g)!
    .join("")
    .match(/(^\S|\S$)?/g)!
    .join("")
    .toUpperCase();
});

const error = () => {
  showFallback.value = true;
};
</script>
