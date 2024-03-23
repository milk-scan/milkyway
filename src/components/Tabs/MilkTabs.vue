<template>
  <TabView v-bind="$attrs">
    <TabPanel
      v-for="tab in tabs"
      :key="tab.title"
      :header="tab.title"
      v-bind="tab.props"
    >
      <component :is="tab.content" />
    </TabPanel>
  </TabView>
</template>

<script lang="ts" setup>
import TabView from "primevue/tabview";
import TabPanel, { TabPanelProps } from "primevue/tabpanel";
import { Component, PropType } from "vue";

interface Tab {
  title: string;
  content: string | Component;
  props: TabPanelProps;
}

defineProps({
  tabs: {
    type: Array as PropType<Array<Tab>>,
    default: () => <Tab[]>[],
  },
});

defineOptions({
  inheritAttrs: false,
});
</script>
