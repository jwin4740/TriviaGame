$(document).ready(function() {
            var questionDiv = "";

            


            // function that creates the question then inserts it into the DOM

            // function generateQuestions() {
            //     function makeForm() {
            //         for (var i = 1; i <= 2; i++) {
            //             questionDiv = $("#questions");
            //             var newForm = $("<form>");
            //             newForm.attr({id: "question" + i, class: "domanda"});
            //             questionDiv.append(newForm);

            //             for (var j = 1; j < 5; j++) {
            //                 var newDiv = $("<div class='choice" + j + " pick'>");
            //                 $("#question" + i).append(newDiv);
            //             }

            //         }

            //     }
            //     makeForm();

            //     function addChoices () {
            //     	  for (var k = 1; k < 5; k++) {
            //         var newInput = $("<input>");
            //         newInput.attr({ type: "radio", name: "question", class: "option", data: String.fromCharCode(k + 64) });
            //         console.log(String.fromCharCode(k + 64));
            //         $(".choice" + k).append(newInput);
            //     }

            //     }
            // 	addChoices();
            // }
            //     generateQuestions();
              
                $("#questions").on("click", ".domanda.choice.option", function() {
                    var answer = $(this).data("value");
                    console.log(answer);
                });













            });
