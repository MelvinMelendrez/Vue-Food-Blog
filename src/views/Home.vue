<template>
  <div class="h-full">
    <div class="flex justify-center gap-2 mt-2">
      <router-link
        v-for="letter in letters"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
      >
        {{ letter }}
      </router-link>
    </div>

    <pre>{{ ingredients }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axiosClient from "../AxiosClient";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(async () => {
  try {
    const response = await axiosClient.get("/list.php?i=list");
    ingredients.value = response.data;
  } catch (error) {
    console.error("Failed to fetch ingredients", error);
  }
});
</script>
