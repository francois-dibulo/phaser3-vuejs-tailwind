import * as Phaser from 'phaser';
import BaseScene from './BaseScene';

function sendMessageToApp(message: any) {
  window.parent.postMessage({
    ...message,
    _origin: 'game',
  }, '*');
}

export default class MainScene extends BaseScene {

  constructor(opts: any) {
    super({ key: 'MainScene' });
  }

  preload() {
    // Load the logo image
  }

  create() {
    const bbox = this.getVPBBox();
    this.add.text(bbox.centerX, bbox.centerY, 'Hello Phaser!').setOrigin(0.5, 0.5);

    // Listen for messages from the parent (vue app)
    window.addEventListener('message', (event) => {
      console.log("Game received message from app", event.data);
    });

    // Send a message to the parent (vue app)
    sendMessageToApp({
      action: 'game_ready',
    });
  }
}
