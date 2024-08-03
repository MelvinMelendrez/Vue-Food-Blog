<template>
  <div class="h-full">
    <Navbar />
    <main class="pt-12">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>
