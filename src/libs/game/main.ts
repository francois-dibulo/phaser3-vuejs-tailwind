// This is were you define your Phaser3 game. All the logic is in the scenes.
import * as Phaser from 'phaser';
import MainScene from "./scenes/MainScene.ts";

export function startGame(opts?: any) {
  let width = Math.min(540, window.innerWidth);
  let height = window.innerHeight;
  let scaleMode = Phaser.Scale.FIT;
  let renderMode = Phaser.AUTO;

  const config = {
    parent: 'game-parent',
    type: renderMode,
    antialias: true,
    preserveDrawingBuffer: true,
    width: width,
    height: height,
    autoFocus: true,
    transparent: false,
    scale: {
      mode: scaleMode,
      parent: 'game-parent',
    },
    scene: [
      MainScene,
    ],
  };

  const game = new Phaser.Game(config);
  // Add custom properties to the game instance
  game.custom = Object.assign(opts || {});

  return game;
}
