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


    // ------- START make question objects for each category ------------- //

    // Chemistry category

    var questionOne = new question("OrganicChemistry", "What is the chemical formula of ammonia", "AH3", "AH4", "NH3", "NH4", "C", "FUN FACT: EDIT some have noticed that this code will throw an error if passed a string where the left-most indexes don't correspond to a correctly nested entry within the object. This is a valid concern, but IMHO best addressed with a try / catch block when calling, rather than having this function silently return undefined for an invalid index.");
    oChemArray.push(questionOne);

    var questionTwo = new question("OrganicChemistry", "What does C6h6 stand for?", "Methane", "Hexane", "Benzene", "Octane", "C", "FUN FACT: The Benzene ring is extremely stable and is the base of many organic molecules");
    oChemArray.push(questionTwo);

    var questionThree = new question("OrganicChemistry", "Which of these organic mechanism names is made up?", "Markovnikov", "Zaitsev", "Karpov", "Grignard", "C", "FUN FACT: Karpov is an international Chess GrandMaster");
    oChemArray.push(questionThree);

    var questionFour = new question("OrganicChemistry", "Which organic mechanism proceeds through a concerted reaction between a conjugated diene and substituted alkene?", "Friedel-Crafts", "Zwitterion", "Claisen Condensation", "Diels-Alder", "D", "FUN FACT: The Diels-Alder reaction is my favorite organic mechanism (Wittig is close 2nd) and it looks awesome visually!!");
    oChemArray.push(questionFour);



    // Hamilton category

    var questionFive = new question("Hamilton", "Who killed hamilton?", "Aaron Burr", "Hercules Mulligan", "Thomas Jefferson", "John Laurens", "A", "FUN FACT: Aaron Burr killed Hamilton in a duel");
    hamiltonArray.push(questionFive);


    var questionSix = new question("Hamilton", "To which of these documents did Hamilton NOT contribute?", "the federalist papers", "the reynolds pamphlet", "the declaration of independence", "the u.s constitution", "C", "FUN FACT: Alexander joins forces with James Madison and John Jay to write a series of essays defending the new U.S Constitution, entitled The Federalist Papers. The plan was to write a total of 25 essays, the work evenly divided among the three men. In the end, they wrote 85 essays in the span of six months. John Jay got sick after writing 5. James Madison wrote 29. Hamilton wrote THE OTHER 51");
    hamiltonArray.push(questionSix);


    var questionSeven = new question("Hamilton", "Which cabinet position did George Washington appoint to Alexander Hamilton", "Secretary of State", "Secretary of the Treasury", "Chief of Staff", "Secretary of Urban Development", "A", "FUN FACT: Alexander Hamilton also founded the Coast Gaurd, The New York Post, and the US Central Bank ");
    hamiltonArray.push(questionSeven);


    var questionEight = new question("Hamilton", "FILL IN THE BLANK: The _____ founding father, without a father, got a lot farther by working a lot harder by being a lot smarter by being a self starter", "5 dollar", "10 dollar", "20 dollar", "100 dollar", "B", "FUN FACT: Alexander Hamilton was going to be removed from the 10 dollar bill, just like Jackson will be replaced by Tubman ");
    hamiltonArray.push(questionEight);


    // Biology category

    var questionNine = new question("Biology", "What organelle is the powerhouse energy producer of the cell?", "Golgi body", "Mitochodria", "Endoplasmic Reticulum", "Lysozome", "B", "FUN FACT: All your mitochondrialDNA is inherited from your mother, and the very first mtDNA found is called our mitochondrial Eve");
    bioArray.push(questionNine);

    var questionTen = new question("Biology", "Who killed hamilton?", "Aaron Burr", "Hercules Mulligan", "Thomas Jefferson", "John Laurens", "A", "FUN FACT: Aaron Burr killed Hamilton in a duel");
    bioArray.push(questionTen);

    var questionEleven = new question("Biology", "Who killed hamilton?", "Aaron Burr", "Hercules Mulligan", "Thomas Jefferson", "John Laurens", "A", "FUN FACT: Aaron Burr killed Hamilton in a duel");
    bioArray.push(questionEleven);

    var questionTwelve = new question("Biology", "Who killed hamilton?", "Aaron Burr", "Hercules Mulligan", "Thomas Jefferson", "John Laurens", "A", "FUN FACT: Aaron Burr killed Hamilton in a duel");
    bioArray.push(questionTwelve);




    // ------- END make question objects for each category ------------- //


    $("#confirmcat").on("click", function() {

        function chooseCategory() {
            if ($("#selection").val() === "OrganicChemistry") {
                questionArray = oChemArray;
            }
            if ($("#selection").val() === "Hamilton") {
                questionArray = hamiltonArray;
            }
            if ($("#selection").val() === "Biology") {
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
