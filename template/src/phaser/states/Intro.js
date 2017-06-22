import Phaser from 'phaser';

/**
 * Intro
 *
 * Display Start Game Button here
 */
export default class Intro extends Phaser.State {
  create () {
    // Add your game content here
    console.log('Intro reached!');
    this.background = this.add.image(0, 0, 'background_intro');
  }

  update () {
    // Add your game logic here
  }
}
