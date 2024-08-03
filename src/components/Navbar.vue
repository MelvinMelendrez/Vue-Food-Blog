<template>
  <header class="bg-black flex justify-between items-stretch">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-blue-600"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-blue-600"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'byIngredient' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-blue-600"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
