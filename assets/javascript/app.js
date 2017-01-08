$(document).ready(function() {



    // global variables defined
    var questionDiv = "";
    var questionArray = [];
    var scienceArray = [];
    var hamiltonArray = [];
    var result = "";
    var timerStart = 15;
    var timer = "";
    var temp = "";
    var totalQuestions = "";
    var wrong = 0;
    var correct = 0;
    var check = false;
    var total = 0;
    var submit = true;

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


    var questionOne = new question("Chemistry", "What does H2O stand for?", "methane", "water", "carbon", "octane", "B", "FUN FACT: EDIT some have noticed that this code will throw an error if passed a string where the left-most indexes don't correspond to a correctly nested entry within the object. This is a valid concern, but IMHO best addressed with a try / catch block when calling, rather than having this function silently return undefined for an invalid index.");
    scienceArray.push(questionOne);

    var questionTwo = new question("Chemistry", "What does C6h6 stand for?", "methane", "hexane", "benzene", "octane", "C", "FUN FACT: jalsjdfl;aslfjasl;jsfjsafj");

    scienceArray.push(questionTwo);

    var questionThree = new question("Chemistry", "Which of these organic mechanism names is made up?", "Markovnikov", "Zaitsev", "Karpov", "Grignard", "C");

    scienceArray.push(questionThree);

    // Hamilton category

    var questionFour = new question("Hamilton", "Who killed hamilton?", "aaronburr", "herculesmulligan", "jefferson", "john laurens", "A", "FUN FACT: ");

    hamiltonArray.push(questionFour);


    var questionFour = new question("Hamilton", "To which of these documents did Hamilton NOT contribute?", "the federalist papers", "the reynolds pamphlet", "the declaration of independence", "the u.s constitution", "C", "FUN FACT: Alexander joins forces with James Madison and John Jay to write a series of essays defending the new U.S Constitution, entitled The Federalist Papers. The plan was to write a total of 25 essays, the work evenly divided among the three men. In the end, they wrote 85 essays in the span of six months. John Jay got sick after writing 5. James Madison wrote 29. Hamilton wrote THE OTHER 51");

    hamiltonArray.push(questionFour);


    var questionFour = new question("Hamilton", "Which cabinet position did George Washington appoint to Alexander Hamilton", "Secretary of State", "Secretary of the Treasury", "Chief of Staff", "Secretary of Urban Development", "A", "FUN FACT: Alexander Hamilton also founded the Coast Gaurd, The New York Post, and the US Central Bank ");

    hamiltonArray.push(questionFour);


    var questionFour = new question("Hamilton", "FILL IN THE BLANK: The _____ founding father, without a father, got a lot farther by working a lot harder by being a lot smarter by being a self starter", "5 dollar", "10 dollar", "20 dollar", "100 dollar", "B", "FUN FACT: Alexander Hamilton was going to be removed from the 10 dollar bill, just like Jackson will be replaced by Tubman ");

    hamiltonArray.push(questionFour);


    var questionFour = new question("Hamilton", "Who killed hamilton?", "aaronburr", "hamilton", "jefferson", "john maurens", "A", "FUN FACT: ");

    hamiltonArray.push(questionFour);





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

    $("#submit").on("click", function() {
        if (submit) {
            stop();
            $("#timer").empty();
            submit = false;
        }

    });

    function decrement() {
        timerStart--;
        $("#timer").html(timerStart);
        if (timerStart === 0) {
            stop();
            submit = false;

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

        $("#explanation").append(questionArray[x].fact).css("border", "dashed 2px white");
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
        timerStart = 15;
        run();
    }


    $("#nextbutton").on("click", "button", function() {
        console.log("ready for next question");
        $(".choice" + questionArray[x].answer).css("border", "none");
        $("#explanation").css("border", "none").empty();
        submit = true;
        resetQuestionBox();
    });


});
