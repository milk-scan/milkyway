<template>
  <Accordion :activeIndex="0">
    <AccordionTab v-for="tab in accordionTabs">
      <template #header>
        <span class="flex align-items-center gap-2 w-full">
          <span class="font-bold white-space-nowrap">{{ tab.title }} </span>
          <Badge :value="tab.badge" class="ml-auto mr-2"/>
        </span>
      </template>
     <component :is="tab.content" v-bind="tab.contentProps" ></component>
    </AccordionTab>
  </Accordion>
</template>

<script lang="ts" setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Badge from "primevue/badge";
import { Component, PropType } from "vue";

interface AccordionTabInterface {
  title: string;
  badge: string | number;
  content: Component;
  contentProps: Object
}

defineProps({
  accordionTabs: {
    type: Array as PropType<Array<AccordionTabInterface>>,
    default: () => <AccordionTabInterface[]>[],
  },
});
</script>
