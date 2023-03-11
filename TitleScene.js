class TitleScene extends Phaser.Scene{
    constructor(){
        super("TitleScene");
        this.startedMusic = false;
        
        this.instrumental = null;
    }

    preload() {
        this.load.image('mountains', './assets/mountains.jpg');
        this.load.image('scenery', './assets/scenery.jpeg');
        this.load.audio('instrumental', './assets/elevatorInstrumental.mp3');
    }

    create(){
        
        //starts the music
        this.startMusic();

        //  add the background
        let scenery = this.add.image(225, 400, 'scenery');
        scenery.setScale(1.2);

        let text = this.add.text(225, 280, "Click/Tap to Farm", {
            fontSize: '36px', 
            color: 'green'
        });
        text.setOrigin(0.5, 0.5);
        text.setInteractive();
        text.on('pointerdown', ()=>{
            this.instrumental.pause(); 
            this.scene.start('MainScene');
        });
        this.tweens.add({
            targets: [text],
            duration: 1000,
            alpha: 0,
            yoyo: true,
            repeat: -1
        });

        


    }

    startMusic() {

        console.log(this.scene.key);

        //  if the game is first starting
        if (this.startedMusic == false) {
            //  instrumental for the game
            this.instrumental = this.sound.add('instrumental', {
                volume: 0.3, 
                loops: -1
            });
            this.instrumental.play();
            this.startedMusic = true;   //music has been started 

            //      other code for REFERENCE
            //
            // let instrumental = this.sound.play('instrumental', {
            //     volume: 0.3, 
            //     loop: -1
            // });
        }
        else {
            this.instrumental.resume();
        }
    }
}