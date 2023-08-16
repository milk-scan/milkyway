<script setup lang="ts">
import FccButton from "./components/FccButton.vue";
import FullPage404 from "./components/FullPage404.vue";
</script>

<template>
  <FccButton text="My teste!"></FccButton>
  <FullPage404
    miniTitle="MilkScan - Página principal"
    title="Under construction"
    subtitle=" Brazilian Startup developing a new way to manage dairy herds."
    socialLink="https://www.linkedin.com/company/milk-scan/"
  />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
