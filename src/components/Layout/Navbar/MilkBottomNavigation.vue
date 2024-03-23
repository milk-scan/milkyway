<template>
  <div
    class="navigation-bottom-wrapper flex w-full bg-white border-t justify-center"
  >
    <TabMenu :model="itemsRef" class="mx-1" v-model:activeIndex="active">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <div class="menu-item-wrapper flex flex-col gap-y-1">
              <Icon :icon="item.icon ? item.icon : ''" class="w-5 h-auto" />
              <span v-bind="props.label" class="text-sm">{{ item.label }}</span>
            </div>
          </a>
        </router-link>
        <a
          v-else
          v-ripple
          :href="item.url"
          :target="item.target"
          v-bind="props.action"
          class="p-0"
        >
          <div
            class="menu-item-wrapper flex flex-col gap-y-1 justify-center items-center"
          >
            <Icon :icon="item.icon ? item.icon : ''" class="w-5 h-auto" />
            <span v-bind="props.label" class="text-sm">{{ item.label }}</span>
          </div>
        </a>
      </template>
    </TabMenu>
  </div>
</template>

<script lang="ts" setup>
import { toRef, PropType } from "vue";
import TabMenu from "primevue/tabmenu";
import { MenuItem } from "primevue/menuitem";
import { Icon } from "@iconify/vue";

const active = defineModel<number>();

const props = defineProps({
  items: {
    type: Array as PropType<Array<MenuItem & { icon: string | undefined }>>,
    default: () => <MenuItem[]>[],
  },
});

const itemsRef = toRef(props, "items");
</script>

<style lang="scss">
li[data-pc-section="inkbar"] {
  width: 0 !important
}
</style>
