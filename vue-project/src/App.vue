<script setup lang="ts">
import VHeader from './components/VHeader.vue';
import VFooter from './components/VFooter.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <VHeader />
  <RouterView />
  <VFooter />
</template>

<style scoped></style>
