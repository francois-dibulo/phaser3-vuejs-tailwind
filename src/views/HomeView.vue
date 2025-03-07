<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="flex flex-col items-center justify-center">
    <h2 class="text-2xl font-bold mt-10">Game Menu</h2>
    <RouterLink to="/play" class="bg-blue-500 text-white px-10 py-2 rounded-md mt-5">
      Play
    </RouterLink>
  </main>
</template>
