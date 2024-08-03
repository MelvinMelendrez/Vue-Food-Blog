<template>
  <div
    v-if="meals.length"
    class="text-black grid grid-cols-1 md:grid-cols-3 gap-5 px-8"
  >
    <div v-for="meal in meals" :key="meal.idMeal">
      <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
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
            {{ truncateInstructions(meal.strInstructions) }}
          </p>
          <div class="flex items-center justify-between">
            <a :href="meal.strYoutube" target="_blank" class="text-blue-500"
              >YouTube</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
    There are no meals
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  meals: {
    type: Array,
    required: true,
  },
});

function truncateInstructions(instructions) {
  return instructions.length > 100
    ? instructions.slice(0, 100) + "..."
    : instructions;
}
</script>

<style scoped>
/* Puedes agregar estilos específicos aquí si es necesario */
</style>
