import 'pixi';
import 'p2';
import config from '../config';
// --------------------------------------------------------------
// Phaser
// --------------------------------------------------------------
import Phaser from 'phaser';

import Boot from './phaser/states/Boot';
import Preload from './phaser/states/Preloader';
import Intro from './phaser/states/Intro';
import Play from './phaser/states/Play';
import Outro from './phaser/states/Outro';


export default class Game extends Phaser.Game {
  constructor () {
    super(config.gameWidth, config.gameHeight, Phaser.AUTO, window.options.phaserID, null, false);

    // Params: Key, StateObject, autoStart
    this.state.add('Boot', Boot, false);
    this.state.add('Preload', Preload, false);
    this.state.add('Intro', Intro, false);
    this.state.add('Play', Play, false);
    this.state.add('Outro', Outro, false);

    this.state.start('Boot');
  }
}