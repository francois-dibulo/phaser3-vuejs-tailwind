// This is where you define your Phaser 4 game. All the logic is in the scenes.
import * as Phaser from 'phaser';
import MainScene from "./scenes/MainScene.ts";

export type GameWithCustom = Phaser.Game & { custom: Record<string, unknown> };

export function startGame(opts?: Record<string, unknown>): GameWithCustom {
  const width = Math.min(540, window.innerWidth);
  const height = window.innerHeight;

  const config: Phaser.Types.Core.GameConfig = {
    parent: 'game-parent',
    type: Phaser.AUTO,
    antialias: true,
    preserveDrawingBuffer: true,
    width,
    height,
    autoFocus: true,
    transparent: false,
    scale: {
      mode: Phaser.Scale.FIT,
      parent: 'game-parent',
    },
    scene: [
      MainScene,
    ],
  };

  const game = new Phaser.Game(config) as GameWithCustom;
  game.custom = { ...(opts || {}) };

  return game;
}
