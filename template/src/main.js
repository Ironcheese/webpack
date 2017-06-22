import config from './config';

// --------------------------------------------------------------
// Vue
// --------------------------------------------------------------
import Vue from 'vue';
// Import Vue Components ....
import topbar from './vue/ui/TopBar.vue';



// --------------------------------------------------------------
// Init Phaser Game
// --------------------------------------------------------------
import Game from './phaser/Game.js';
window.game = new Game();

// --------------------------------------------------------------
// Init Vue
// --------------------------------------------------------------
window.ui = new Vue({
	el: window.options.vueUID,
  components: {
    topbar
  }
});
