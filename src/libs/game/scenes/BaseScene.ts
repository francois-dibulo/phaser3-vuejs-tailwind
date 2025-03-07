import * as Phaser from 'phaser';

export default class BaseScene extends Phaser.Scene {

  constructor(opts: { key: string }) {
    super(opts.key);
  }

  // ---------------------------------------------------------------------
  // VIEWPORT
  // ---------------------------------------------------------------------

  getBBox(rect: any) {
    const camera = rect || this.cameras.main.getBounds();
    return {
      x: 0,
      y: 0,
      top: 0,
      bottom: camera.height,
      height: camera.height,
      left: 0,
      width: camera.width,
      right: camera.width,
      centerX: camera.centerX,
      centerY: camera.centerY,
      canvas: this.sys.game.canvas,
    };
  }

  getWorldBBox() {
    return this.cameras.main.getBounds();
  }

  getVPBBox() {
    return this.getBBox(this.cameras.main);
  }

  // ---------------------------------------------------------------------
  // API: Pause and Mute
  // ---------------------------------------------------------------------

  togglePause(paused: boolean) {
    if (paused) {
      this.pauseGame();
    } else {
      this.resumeGame();
    }
  }

  pauseGame() {
    this.scene.pause();
  }

  resumeGame() {
    this.scene.resume();
  }

}
