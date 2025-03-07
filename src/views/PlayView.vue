<script setup lang="ts"></script>
<template>
  <div class="w-full h-full min-h-screen flex flex-col">
    <RouterLink to="/">
      <h2>Back</h2>
    </RouterLink>
    <div class="w-full h-full flex-grow flex flex-col items-center justify-center">
      <iframe src="game.html" class="w-full h-full flex-grow"></iframe>
    </div>
  </div>
</template>
