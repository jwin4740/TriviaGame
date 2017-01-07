


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