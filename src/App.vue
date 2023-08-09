<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuSuperior from './componentes/MenuSuperior.vue';
</script>

<template>
  <MenuSuperior/>
  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<style scoped></style>
