class Quiz {
    constructor(){}

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref("/").update({
            gameState:state
        });
    }

async start(){
        if(gameState===0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref("contestantCount").once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
        
    }

    play(){
        question.hide();
        background("yellow");
        textSize(20)
        fill(0);
        text("Result Of The Quiz",350,30);
        Contestant.getContestantInfo();
        if(allContestant!==undefined){
            fill("blue");
            textSize(20);
            text("*NOTE: Contestant who answered correct are highlighted in green color!",100,230);
            //var displayPosition = 430;
            for(var con in allContestant){
                textSize(15)
                text(allContestant[con].name + ": " + allContestant[con].answer,300,260);
                //text(allContestant[con].name + ": " + allContestant[con].answer,300,280);
                //text(allContestant[con].name + ": " + allContestant[con].answer,300,300);
                //text(allContestant[con].name + ": " + allContestant[con].answer,300,320);
                var correctAns = "2";
                if(correctAns === allContestant[con].answer){
                    fill("green")
                }
                else {
                fill("red");
                }
                

            }
        }
    }
}