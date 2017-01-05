$(document).ready(function() {
    var questionDiv = "";

    $(".optiona").append("hello world");


    // function that creates the question then inserts it into the DOM

    function generateQuestions() {
        for (var i = 1; i <= 2; i++) {
            questionDiv = $("#questionsDom" + i);
            var newForm = $("<form>");
            newForm.attr("id", "question" + i);
            questionDiv.append(newForm).append("<hr style='clear: both;'>");
            for (var j = 1; j < 5; j++) {
                var newDiv = $("<div class='choice" + j + " pick'>");
                $("#question" + i).append(newDiv);
            }
            for (var k = 1; k <= 5; k++) {
                var newInput = $("<input>");
                newInput.attr({ type: "radio", name: "question", class: "option", data: String.fromCharCode(k + 64) });
                console.log(String.fromCharCode(k + 64));
                $(".choice" + k).append(newInput);
            }
            questionDiv.append("<div id='questionsDom" + (i + 1) + "'>");
        }
    }
    generateQuestions();


    $(document).on("click", ".option", function() {
        var answer = $("input[name='question']:checked").data("value");
        console.log(answer);
    });













});
