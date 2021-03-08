class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player=new Player();
            player.getCount();
            form= new Form();
            form.display();
        }
        car1=createSprite(100,100);
        car2=createSprite(300,100);
        car3=createSprite(500,100);
        car4=createSprite(700,100);
        cars=[car1,car2,car3,car4];
        
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start", 220,50);
        Player.getPlayerInfo();

        if(allPlayers!=undefined){
            var display_pos=130;
            var index=0;
            var x=0;
            var y=0;
            for(var i in allPlayers){
            index=index+1;
            x=x+200;
            y=displayHeight-allPlayers[i].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
            if(index===player.index){
                fill("red");
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;

            }
        }
    }

    if(keyIsDown(UP_ARROW)&&player.index!=null){

        player.distance+=50;
        player.update();

    }

    drawSprites();
}
}
