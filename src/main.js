import "phaser";

var config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  },
  game = new Phaser.Game(config),
  preload = () => {
    this.load.image("sky");
  },
  create = () => {},
  update = () => {};
