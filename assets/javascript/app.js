$(document).ready(function() {
    // global variables defined


    var questionDiv = "";
    var scienceArray = [];
    var result = "";
    var timerStart = 12;
    var timer = "";
    var temp = "";


    // prototype object
    function question(category, prompt, choiceA, choiceB, choiceC, choiceD, answer) {
        this.category = category;
        this.prompt = prompt; // do subcategories
        this.choiceA = choiceA;
        this.choiceB = choiceB;
        this.choiceC = choiceC;
        this.choiceD = choiceD;
        this.answer = answer;

    };

    // make Character objects for each player
    var questionOne = new question("chemistry", "what does H2O stand for?", "methane", "water", "carbon", "octane", "B");
    console.log(questionOne.prompt);
    scienceArray.push(questionOne);

    var questionTwo = new question("chemistry", "what does C6h6 stand for?", "methane", "hexane", "benzene", "octane");
    console.log(questionTwo.prompt);
    scienceArray.push(questionTwo);

    var questionThree = new question("chemistry", "which of these organic mechanism names is made up?", "Markovnikov", "Zaitsev", "Karpov", "Grignard");
    console.log(questionThree.prompt);
    scienceArray.push(questionThree);
    console.log(scienceArray);

var x = 0; // x is set to whatever question we want to ask

    function fillQuestionBox(x) {
        $("#domanda").append(scienceArray[x].prompt);
        $("#labelA").append(scienceArray[x].choiceA);
        $("#labelB").append(scienceArray[x].choiceB);
        $("#labelC").append(scienceArray[x].choiceC);
        $("#labelD").append(scienceArray[x].choiceD);
    }
    fillQuestionBox(x);

    function decrement() {
        timerStart--;
        $("#timer").html(timerStart);
        if (timerStart === 0) {
            stop()
        }
    }

    function run() {
        timer = setInterval(decrement, 1000);
    }

    function checkAnswer(x) {

        if (result === scienceArray[x].answer) {
            alert("correct!!!!");
        }
        if (result != scienceArray[x].answer) {
            alert("wrongo!!!!");
        }
        console.log(result);
        console.log(scienceArray[x].answer);
        $("#nextbutton").append("<button id='next'>NEXT</button>");

    }



    function stop() {
        clearInterval(timer);
		checkAnswer(x);


    }
    run();

    function resetQuestionBox () {
    	x++;
    	$("input:radio").prop("checked", false);
    	$("#domanda").html(scienceArray[x].prompt);
        $("#labelA").html("A) " + scienceArray[x].choiceA);
        $("#labelB").html("B) " + scienceArray[x].choiceB);
        $("#labelC").html("C) " + scienceArray[x].choiceC);
        $("#labelD").html("D) " + scienceArray[x].choiceD);
        $("#nextbutton").empty();
        timerStart = 12;
        run();
    }
    $(".option").on("click", function() {
        result = $(this).attr("data");
        
        console.log(result);

    });

$("#nextbutton").on("click", "button", function () {
	console.log("ready for next question");
	resetQuestionBox();
});









});
