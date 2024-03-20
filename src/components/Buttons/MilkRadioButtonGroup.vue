<template>
  <div class="card flex justify-content-center">
    <div class="flex flex-column flex-col gap-3">
      <div
        v-for="decision, i in decisions"
        :key="decision.key"
        class="flex align-items-center"
      >
        <RadioButton
          v-model="selectedDefault"
          :inputId="decision.key ? decision.key + i : undefined" 
          :value="decision.key"
          v-bind="$attrs"
        />
        <label :for="decision.key" class="ml-2">{{ decision.name }}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import RadioButton from "primevue/radiobutton";
import { PropType, ref, toRef } from "vue";

type RadioDecision = {
  key: string | undefined;
  name: String;
};

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  decisions: {
    type: Array as PropType<Array<RadioDecision>>,
    default: () => <RadioDecision[]>[],
  },
  selectedDefault: String
});

const selectedDefault = toRef(props, 'selectedDefault');

</script>
