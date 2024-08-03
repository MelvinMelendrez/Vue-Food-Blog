<template>
  <div
    class="bg-white text-black shadow rounded-xl hover:scale-105 transition-all"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ truncateWords(meal.strInstructions, 20) }}
      </p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { truncateWords } from "../filters";
import YouTubeButton from "./YouTubeButton.vue";

const props = defineProps({
  meal: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Puedes agregar estilos específicos aquí si es necesario */
</style>
