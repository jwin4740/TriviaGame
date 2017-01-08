$(document).ready(function() {

    // global variables defined
    var questionDiv = "";
    var questionArray = [];
    var oChemArray = [];
    var hamiltonArray = [];
    var bioArray = [];
    var result = "";
    var timerStart = 15;
    var timer = "";
    var totalQuestions = "";
    var wrong = 0;
    var correct = 0;
    var check = false;
    var total = 0;
    var submit = true;
    var x = 0;
    var catCounter = 0;
    var firstCategory = true;

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

    var questionOne = new question("OrganicChemistry", "What is the chemical formula of ammonia", "AH3", "AH4", "NH3", "NH4", "C", "FUN FACT: NH4 is the formula for ammonium");
    oChemArray.push(questionOne);

    var questionTwo = new question("OrganicChemistry", "What does C6h6 stand for?", "Methane", "Hexane", "Benzene", "Octane", "C", "FUN FACT: The Benzene ring is extremely stable and is the base of many organic molecules");
    oChemArray.push(questionTwo);

    var questionThree = new question("OrganicChemistry", "Which of these organic mechanism names is made up?", "Markovnikov", "Zaitsev", "Karpov", "Grignard", "C", "FUN FACT: Anatoly Karpov is an international Chess GrandMaster");
    oChemArray.push(questionThree);

    var questionFour = new question("OrganicChemistry", "Which organic mechanism proceeds through a concerted reaction between a conjugated diene and substituted alkene?", "Friedel-Crafts", "Zwitterion", "Claisen Condensation", "Diels-Alder", "D", "FUN FACT: The Diels-Alder reaction is my favorite organic mechanism (Wittig is close 2nd) and it looks awesome visually!!");
    oChemArray.push(questionFour);


    // Hamilton category

    var questionFive = new question("Hamilton", "Who killed Alexander Hamilton?", "Aaron Burr", "Hercules Mulligan", "Thomas Jefferson", "John Laurens", "A", "FUN FACT: Aaron Burr killed Hamilton in a duel");
    hamiltonArray.push(questionFive);

    var questionSix = new question("Hamilton", "To which of these documents did Hamilton NOT contribute?", "The Federalist Papers", "The Reynolds Pamphlet", "The Declaration of Independence", "The U.S. Constitution", "C", "FUN FACT: Alexander joins forces with James Madison and John Jay to write a series of essays defending the new U.S Constitution, entitled The Federalist Papers. The plan was to write a total of 25 essays, the work evenly divided among the three men. In the end, they wrote 85 essays in the span of six months. John Jay got sick after writing 5. James Madison wrote 29. Hamilton wrote THE OTHER 51");
    hamiltonArray.push(questionSix);

    var questionSeven = new question("Hamilton", "Which cabinet position did George Washington appoint to Alexander Hamilton", "Secretary of State", "Secretary of the Treasury", "Chief of Staff", "Secretary of Urban Development", "A", "FUN FACT: Alexander Hamilton also founded the Coast Gaurd, The New York Post, and the US Central Bank ");
    hamiltonArray.push(questionSeven);

    var questionEight = new question("Hamilton", "FILL IN THE BLANK: The _____ founding father, without a father, got a lot farther by working a lot harder by being a lot smarter by being a self starter", "5 dollar", "10 dollar", "20 dollar", "100 dollar", "B", "FUN FACT: Alexander Hamilton was going to be removed from the 10 dollar bill, just like Jackson will be replaced by Tubman ");
    hamiltonArray.push(questionEight);


    // Biology category

    var questionNine = new question("Biology", "What organelle is the powerhouse energy producer of the cell?", "Golgi body", "Mitochodria", "Endoplasmic Reticulum", "Lysozome", "B", "FUN FACT: All your mitochondrialDNA is inherited from your mother, and the very first mtDNA found is called our mitochondrial Eve");
    bioArray.push(questionNine);

    var questionTen = new question("Biology", "What is the main product of anaerobic respiration?", "glucose", "ATP", "protons", "glycogen", "B", "FUN FACT: adenosine triphosphate is very good source of energy");
    bioArray.push(questionTen);

    var questionEleven = new question("Biology", "What hormone functions to raise blood sugar for efficient energy delivery", "gherlin", "serotonin", "glucagon", "insulin", "C", "FUN FACT: glucagon is the hormone that raises blood sugar, while insulin removes sugar from the bloodstream thus lowering blood sugar");
    bioArray.push(questionEleven);

    var questionTwelve = new question("Biology", "What percentage of the brain do humans actually use", "20%", "40%", "100%", "60%", "C", "FUN FACT: For some reason, there has been a myth widely propagated that says humans only use part of their brains; neuroscientists know as a fact this myth is false!");
    bioArray.push(questionTwelve);


    // ------- END make question objects for each category ------------- //


    $("#confirmcat").on("click", function() {
        $("#newcats").empty();
        if (firstCategory) {
            function chooseCategory() {

                if ($("#selection").val() === "OrganicChemistry") {
                    questionArray = oChemArray;
                }
                if ($("#selection").val() === "Hamilton") {
                    questionArray = hamiltonArray;
                }
                if ($("#selection").val() === "Biology") {
                    questionArray = bioArray;
                }

            }
            chooseCategory();
            fillQuestionBox(x);
            $("#questionbox").css("display", "block");
            firstCategory = false;
        }

    });


    function fillQuestionBox(x) {
        $("#domanda").append(questionArray[x].prompt);
        $("#labelA").append(questionArray[x].choiceA);
        $("#labelB").append(questionArray[x].choiceB);
        $("#labelC").append(questionArray[x].choiceC);
        $("#labelD").append(questionArray[x].choiceD);

        run();
    }

    function run() {
        timer = setInterval(decrement, 1000);
    }

    function decrement() {
        timerStart--;
        $("#timer").html(timerStart);
        if (timerStart === 0) {
            stop();
            submit = false;

        }
    }

    $("#submit").on("click", function() {
        if (submit) {
            stop();
            $("#timer").empty();
            submit = false;
        }

    });

    function checkAnswer(x) {

        if (result === questionArray[x].answer) {
            check = true;
        }
        if (result != questionArray[x].answer) {
            check = false;
        }
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



    function stop() {
        clearInterval(timer);
        checkAnswer(x);
    }



    function resetQuestionBox() {
        x++;
        $("input:radio").prop("checked", false);
        $("#reveal").empty();

        if (catCounter === 4) {
            $("#domanda").html("");
            x = 0;
            $("#nextbutton").empty();
            $("#questionbox").css("display", "none");
            $("#newcats").html("<h2>CHOOSE ANOTHER CATEGORY</h2>");
            questionArray = [];
            firstCategory = true;
            catCounter = 0;
            $("#labelA").html("");
            $("#labelB").html("");
            $("#labelC").html("");
            $("#labelD").html("");
        } 

        else {
            $("#domanda").html(questionArray[x].prompt);
            $("#labelA").html("A) " + questionArray[x].choiceA);
            $("#labelB").html("B) " + questionArray[x].choiceB);
            $("#labelC").html("C) " + questionArray[x].choiceC);
            $("#labelD").html("D) " + questionArray[x].choiceD);
        }
        $("#nextbutton").empty();
        timerStart = 15;

        run();
        console.log(bioArray);

    }


    $("#nextbutton").on("click", "button", function() {
        $(".choice" + questionArray[x].answer).css("border", "none");
        $("#explanation").css("border", "none").empty();
        submit = true;
        catCounter++;
        console.log(catCounter);
        console.log(bioArray);

        resetQuestionBox();

    });


});
