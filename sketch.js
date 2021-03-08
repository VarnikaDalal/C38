var database, position;
var gameState=0, playerCount=0;
var game,player,form;
var allPlayers, distance=0;
var car1, car2, car3, car4;
var cars;

function setup(){
    createCanvas(displayWidth-300, displayHeight-250);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
    
}

