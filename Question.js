class Question {
    constructor(){
        this.question = createElement("h3");
        this.option1 = createElement("h3");
        this.option2 = createElement("h3");
        this.option3 = createElement("h3");
        this.option4 = createElement("h3");
        this.input1 = createInput("Enter Your Name Here...");
        this.input2 = createInput("Enter Correct Option No.");
        this.button = createButton("Submit");
    }

    hide(){
        //title.hide();
        this.input1.hide();
        this.button.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("MyQuiz Game");
        title.position(350,0);

        this.question.html("Question :- What starts and end with the letter 'E', but has only one letter? ");
        this.question.position(150,80);
        this.option1.html("1: Everyone " );
        this.option1.position(150,100);
        this.option2.html("2: Envelope" );
        this.option2.position(150,120);
        this.option3.html("3: Estimate" );
        this.option3.position(150,140);
        this.option4.html("4: Example" );
        this.option4.position(150,160);

        this.input1.position(150,250);
        this.input2.position(400,250);

        this.button.position(330,300);

        var name = this.input1.value();
            contestantCount += 1;
            contestant.update(name);
            contestant.updateCount(contestantCount);

        var answer = this.input2.value();
            contestantCount += 1;
            contestant.update(answer);
            contestant.updateCount(contestantCount);
    
            

            this.button.mousePressed(()=>{
                title.hide();
                this.input1.hide();
                this.input2.hide();
                this.button.hide();
                contestant.answer = this.input2.value();
                contestant.name = this.input1.value();
                contestantCount+=1;
                contestant.index = contestantCount;
                contestant.update();
                contestant.updateCount(contestantCount);

            });
    }
}