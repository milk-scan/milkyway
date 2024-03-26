<template>
  <Accordion :activeIndex="0" v-bind="$attrs">
    <AccordionTab v-for="{ title, badge, tabProps, contentProps, content} in accordionTabs" v-bind="tabProps">
      <template #header>
        <span class="flex align-items-center gap-2 w-full">
          <span class="font-bold white-space-nowrap">{{ title }} </span>
          <Badge :value="badge" class="ml-auto mr-2"/>
        </span>
      </template>
     <component :is="content" v-bind="contentProps" ></component>
    </AccordionTab>
  </Accordion>
</template>

<script lang="ts" setup>
import Accordion from "primevue/accordion";
import AccordionTab, { AccordionTabProps } from "primevue/accordiontab";
import Badge from "primevue/badge";
import { Component, PropType } from "vue";

interface AccordionTabInterface {
  title: string;
  badge: string | number;
  content: Component;
  contentProps: Object
  tabProps: AccordionTabProps
}

defineProps({
  accordionTabs: {
    type: Array as PropType<Array<AccordionTabInterface>>,
    default: () => <AccordionTabInterface[]>[],
  },
});

defineOptions({
    inheritAttrs: true
})
</script>
