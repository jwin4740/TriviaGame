$(document).ready(function() {
    var questionDiv = "";
    var scienceArray = [];


    // prototype object
    function question(category, prompt, choiceA, choiceB, choiceC, choiceD) {
        this.category = category;
        this.prompt = prompt;
        this.choiceA = choiceA;
        this.choiceB = choiceB;
        this.choiceC = choiceC;
        this.choiceD = choiceD;

    };

    // make Character objects for each player
    var questionOne = new question("science", "what does H2O stand for?", "methane", "water", "carbon", "octane");
    console.log(questionOne.prompt);
    scienceArray.push(questionOne);

    var questionTwo = new question("science", "what does C6h6 stand for?", "methane", "hexane", "benzene", "octane");
    console.log(questionTwo.prompt);
    scienceArray.push(questionTwo);
    console.log(scienceArray[0]);




    function fillQuestionBox(x) {
        $("#domanda").append(scienceArray[x].prompt);
        $("#labelA").append(scienceArray[x].choiceA);
        $("#labelB").append(scienceArray[x].choiceB);
        $("#labelC").append(scienceArray[x].choiceC);
        $("#labelD").append(scienceArray[x].choiceD);

           }

    fillQuestionBox(0);

    $("#questions").on("click", ".domanda.choice.option", function() {
        var answer = $(this).data("value");
        console.log(answer);
    });













});
