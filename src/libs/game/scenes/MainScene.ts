import * as Phaser from 'phaser';
import BaseScene from './BaseScene';

export default class MainScene extends BaseScene {

  constructor(opts: any) {
    super({ key: 'MainScene' });
  }

  create() {
    this.add.text(100, 100, 'Hello Phaser!');
  }
}
