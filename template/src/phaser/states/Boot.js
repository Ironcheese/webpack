import Phaser from 'phaser';
import config from '../config';
/**
 * Boot State
 *
 * - Kicks off Phaser Setup and loads Web Fonts
 */
export default class Boot extends Phaser.State {
  init () {
    // Stage
    this.stage.backgroundColor = config.boot.backgroundcolor;
    this.stage.disableVisibilityChange = true;

    // Recommended to leave as 1 unless you need multi-touch support
    this.input.maxPointers = 1
    
    // Scale
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //this.scale.refresh();
    this.scale.pageAlignVertically = true;
    this.scale.pageAlignHorizontally = true;
    this.scale.setMinMax(config.gameMinWidth, config.gameMinHeight, config.gameMaxWidth, config.gameMaxHeight);
  }

  preload () {
    this.load.crossOrigin = 'anonymous';
    // Load anything you need for the preloader (e.g. loading bars) here
    this.load.image("background_preload", window.options.preloadBG);
  }

  create () {
    this.state.start('Preload')
  }
}
