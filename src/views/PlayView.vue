<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';

const gameIframe = ref<HTMLIFrameElement | null>(null);

function sendMessageToGame(message: any) {
  // Send a message to the game
  gameIframe.value?.contentWindow?.postMessage({
    ...message,
    _origin: 'app',
  }, '*');
}

function onGameMessage(event: MessageEvent) {
  console.log("App received message from game", event.data);
  if (event.data.action === 'game_ready') {
    sendMessageToGame({
      action: 'play_ready',
    });
  }
}

onMounted(() => {
  // Listen for messages from the game
  window.addEventListener('message', onGameMessage);
});

onBeforeUnmount(() => {
  // Remove the message listener
  window.removeEventListener('message', onGameMessage);
});
</script>
<template>
  <div class="w-full h-full min-h-screen flex flex-col">
    <RouterLink to="/">
      <h2>Back</h2>
    </RouterLink>
    <div class="w-full h-full flex-grow flex flex-col items-center justify-center">
      <iframe ref="gameIframe" src="game.html" class="w-full h-full flex-grow"></iframe>
    </div>
  </div>
</template>
