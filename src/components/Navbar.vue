<template>
  <header
    class="fixed w-full z-10 mb-15 bg-black flex justify-between items-center p-4"
  >
    <router-link :to="{ name: 'home' }" class="text-white text-xl font-bold">
      Home
    </router-link>
    <nav class="flex gap-4">
      <router-link
        :to="{ name: 'byName' }"
        class="text-white px-4 py-2 rounded transition-colors hover:bg-blue-600"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="text-white px-4 py-2 rounded transition-colors hover:bg-blue-600"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="text-white px-4 py-2 rounded transition-colors hover:bg-blue-600"
      >
        Meals By Ingredients
      </router-link>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="css" scoped></style>
