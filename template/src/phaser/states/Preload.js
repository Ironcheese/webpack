import Phaser from 'phaser-ce'

import WebFont from 'webfontloader';
import config from '../config';
/**
 * Preload 
 * 
 */
export default class Preload extends Phaser.State {
  constructor () {
    super();

    this.handleFontLoaded = this.handleFontLoaded.bind(this);

    this.assetsLoaded = false;
    this.fontLoaded = false;
    this.nextStepTriggered = false;
  }

  preload () {
    const assets = window.assets;
    this.background = this.add.image(0, 0, "background_splash");
    this.load.onLoadComplete.add(this.handleLoadComplete, this);

    //
    // load your assets
    //

    // Load Images, if available
    if (Object.keys(assets.image).length) {
      for (var e in assets.image) {
        this.load.image(
          e,
          assets.image[e]
        );
      }
    }

    // Load Spritesheets
    if (Object.keys(assets.spritesheet).length) {
      for (var e in assets.spritesheet) {
        this.load.spritesheet(
          e,
          assets.spritesheet[e].src,
          assets.spritesheet[e].width,
          assets.spritesheet[e].height
        );
      }
    }

    // Load Starling XML Spritesheet Atlas
    if (assets.atlas && assets.atlas.length) {
      assets.atlas.forEach(function(e,i,a) {
        this.load.atlasXML(
          e[0],
          e[1],
          e[2]
        );
      });
    }

    // Load Audio
    if (assets.audio && assets.audio.length) {
      assets.audio.forEach(function(e,i,a) {
        this.load.audio(
          e[0],
          e[1]
        );
      });
    }

    // Load Scripts
    if (assets.scripts && Object.keys(assets.scripts).length) {
      for (var e in assets.scripts) {
        this.load.script(
          e,
          assets.scripts[e]
        );
      }
    }

    WebFont.load({
      google: {
        families: [window.options.googleFontString]
      },
      active: this.handleFontLoaded
    });
  }

  update() {
    if (this.assetsLoaded && this.fontLoaded && !this.triggered) {
      this.triggered = true;
      this.state.start('Intro');
    }
  }

  handleLoadComplete() {
    this.assetsLoaded = true;
  }
  handleFontLoaded() {
    this.fontLoaded = true;
  }
}
