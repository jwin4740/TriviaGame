$(document).ready(function() {
    // global variables defined


    var questionDiv = "";
    var scienceArray = [];
    var answer;
    var timerStart = 12;
    var timer;


    // prototype object
    function question(category, prompt, choiceA, choiceB, choiceC, choiceD) {
        this.category = category;
        this.prompt = prompt; // do subcategories
        this.choiceA = choiceA;
        this.choiceB = choiceB;
        this.choiceC = choiceC;
        this.choiceD = choiceD;

    };

    // make Character objects for each player
    var questionOne = new question("chemistry", "what does H2O stand for?", "methane", "water", "carbon", "octane");
    console.log(questionOne.prompt);
    scienceArray.push(questionOne);

    var questionTwo = new question("chemistry", "what does C6h6 stand for?", "methane", "hexane", "benzene", "octane");
    console.log(questionTwo.prompt);
    scienceArray.push(questionTwo);
    
    var questionThree = new question("chemistry", "which of these organic mechanism names is made up?", "Markovnikov", "Zaitsev", "Karpov", "Grignard");
    console.log(questionThree.prompt);
    scienceArray.push(questionThree);
    console.log(scienceArray);




    function fillQuestionBox(x) {
        $("#domanda").append(scienceArray[x].prompt);
        $("#labelA").append(scienceArray[x].choiceA);
        $("#labelB").append(scienceArray[x].choiceB);
        $("#labelC").append(scienceArray[x].choiceC);
        $("#labelD").append(scienceArray[x].choiceD);

    }
    fillQuestionBox(2);

    function decrement () {
    	timerStart--;
    	$("#timer").html(timerStart);

    	if (timerStart === 0)
    	{
    		stop();
    	}

    }

    function run () {
    timer = setInterval(decrement, 1000);
}

function stop (){
	clearInterval(timer);
	timerStart = 12;
}
run(),
    $(".option").on("click", function() {
        answer = $(this).attr("data");
        console.log(answer);


    });











});
