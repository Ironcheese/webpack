import Phaser from 'phaser-ce';

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset}) {
    super(game, x, y, asset);
    this.anchor.setTo(0.5);
    this.name = asset;
    
    this.game.add.existing(this);

    // this.inputEnabled = true;
    // this.events.onInputDown.add(this.handleInput, this);

    // Hook into events
    // this.game.events.onUserActivation.add(this.handleUserActivation, this);
    // this.game.events.onUserDeactivation.add(this.handleUserDeactivation, this);
  }
}
