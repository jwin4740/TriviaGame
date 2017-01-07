$(document).ready(function() {
    // global variables defined
    var questionDiv = "";
    var questionArray = [];
    var scienceArray = [];
    var hamiltonArray = [];
    var result = "";
    var timerStart = 5;
    var timer = "";
    var temp = "";
    var totalQuestions = "";
    var wrong = 0;
    var correct = 0;
    var check = false;
    var total = 0;

    var x = 0; // x is set to whatever question we want to ask
    //constructor question object
    function question(category, prompt, choiceA, choiceB, choiceC, choiceD, answer, fact) {
        this.category = category;
        this.prompt = prompt; // do subcategories
        this.choiceA = choiceA;
        this.choiceB = choiceB;
        this.choiceC = choiceC;
        this.choiceD = choiceD;
        this.answer = answer;
        this.fact = fact;
    };


    // make Character objects for each player


    var questionOne = new question("chemistry", "what does H2O stand for?", "methane", "water", "carbon", "octane", "B", "FUN FACT: EDIT some have noticed that this code will throw an error if passed a string where the left-most indexes don't correspond to a correctly nested entry within the object. This is a valid concern, but IMHO best addressed with a try / catch block when calling, rather than having this function silently return undefined for an invalid index.");
    console.log(questionOne.prompt);
    scienceArray.push(questionOne);

    var questionTwo = new question("chemistry", "what does C6h6 stand for?", "methane", "hexane", "benzene", "octane", "C", "FUN FACT: jalsjdfl;aslfjasl;jsfjsafj");
    console.log(questionTwo.prompt);
    scienceArray.push(questionTwo);

    var questionThree = new question("chemistry", "which of these organic mechanism names is made up?", "Markovnikov", "Zaitsev", "Karpov", "Grignard", "C");
    console.log(questionThree.prompt);
    scienceArray.push(questionThree);
    console.log(scienceArray);

    var questionFour = new question("hamilton", "Who killed hamilton?", "aaronburr", "hamilton", "jefferson", "john maurens", "A");
    console.log(questionFour.prompt);
    hamiltonArray.push(questionFour);
    console.log(hamiltonArray);



    console.log($("#selection").val());
    // $("#getmessage").on("click", function() {
    //     key = parseFloat($("#caesarkey").val());
    //     messagi = $("#message").val();

    $("#confirmcat").on("click", function() {


        function chooseCategory() {
            if ($("#selection").val() === "Chemistry") {
                console.log("option working");
                questionArray = scienceArray;
            }
            if ($("#selection").val() === "Hamilton") {
                console.log("option working");
                questionArray = hamiltonArray;
            }
        }
        chooseCategory();
        fillQuestionBox(x);
        $("#questionbox").css("display", "block");
    });


    function fillQuestionBox(x) {
        $("#domanda").append(questionArray[x].prompt);
        $("#labelA").append(questionArray[x].choiceA);
        $("#labelB").append(questionArray[x].choiceB);
        $("#labelC").append(questionArray[x].choiceC);
        $("#labelD").append(questionArray[x].choiceD);
        run();
    }


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

        if (result === questionArray[x].answer) {
            check = true;
        }
        if (result != questionArray[x].answer) {
            check = false;
        }
        console.log(result);
        console.log(questionArray[x].answer);
        $("#reveal").html("<h3> The correct answer is: " + questionArray[x].answer + "</h3>");
        $(".choice" + questionArray[x].answer).css("border", "solid 4px #7FFF00");
        if (check) {
            correct++;
            $("#correct").html(correct);
        } else

        {
            wrong++;
            $("#wrong").html(wrong);
        }

        total++;
        $("#total").html(total);
        $("#explanation").append(questionArray[x].fact);
        $("#nextbutton").append("<button id='next'>NEXT</button>");

    }

    $(".option").on("click", function() {
        result = $(this).attr("data");

        console.log(result);

    });


    function stop() {
        clearInterval(timer);
        checkAnswer(x);
    }



    function resetQuestionBox() {
        x++;
        $("input:radio").prop("checked", false);
        $("#reveal").empty();
        $("#domanda").html(questionArray[x].prompt);
        $("#labelA").html("A) " + questionArray[x].choiceA);
        $("#labelB").html("B) " + questionArray[x].choiceB);
        $("#labelC").html("C) " + questionArray[x].choiceC);
        $("#labelD").html("D) " + questionArray[x].choiceD);
        $("#nextbutton").empty();
        timerStart = 5;
        run();
    }


    $("#pause").on("click", function pauseTimer() {
        clearInterval(timer);

    });

    $("#resume").on("click", function pauseTimer() {
        run();

    });



    $("#nextbutton").on("click", "button", function() {
        console.log("ready for next question");
        $(".choice" + questionArray[x].answer).css("border", "none");
        $("#explanation").empty();
        resetQuestionBox();
    });









});
