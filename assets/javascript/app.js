$(document).ready(function() {
    var n = 6; //number of questions

    $(".optiona").append("hello world");


    // function that creates the question then inserts it into the DOM

    function generateQuestion() {
        for (var i = 1; i <= n; i++) {
            var questionDiv = $("#questions");
            var newForm = $("<form>");
            newForm.attr("id", "question" + i);
            var newInput = $("<input>");
            newInput.attr({type: "radio", name: "question"})
            questionDiv.append(newForm).append(newInput);
        }
    }
    generateQuestion();


    $(document).on("click", ".option", function() {
        var answer = $("input[name='question']:checked").data("value");
        console.log(answer);
    });













});
