<script setup lang="ts">
import { startGame } from '@/libs/game/main';
import { onMounted, onUnmounted } from 'vue';

let gameInstance: Phaser.Game | null = null;

onMounted(() => {
  gameInstance = startGame();
});

onUnmounted(() => {
  gameInstance?.destroy(true);
});
</script>

<template>
  <div class="w-full h-full min-h-screen bg-neutral-900">
    <!-- Your Phaser3 game will be rendered here -->
    <div id="game-parent" class="w-full h-full min-h-screen flex flex-col items-center justify-center"></div>
  </div>
</template>


