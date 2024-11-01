
/* Multiplication Quiz 
 * This program should ask five multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */
main();

/* Setup */
// Define a function called main and then call it up top.
// Define a function called askFive and call it from inside main().
// Define a function called askQuestion and call it from inside askFive() as askQuestion(1);


/* main calls askFive, stores return value in score.
 * Provides overall feedback based on score: perfect or number of errors.
 * @param: none
 * @return: none
 */
function main() {
    let wrong = askFive();
    if (wrong == 0) alert("Perfect!");
    else alert("You got " + wrong + " out of 5 wrong.");
}

/* askFive calls askQuestion five times, counting and returning number wrong
 * @param: none
 * @return: score (0-5)
 */
function askFive() {
    let score = 0;
    for (let question = 1; question <= 5; question++) {
        score += whileQuestions(question);
    }
    return score;
}

/* askQuestion asks a multiplication question, returns 1 if incorrect
 * @param: question (integer 1-5)
 * @return: integer (0 or 1)
 */
function whileQuestions(question){
    wrong = 0;
    let a = Math.floor(Math.random()*7)+3;
    let b = Math.floor(Math.random()*7)+3;
    let product = a * b;
    let equation = a + " * " + b + " = ?";
    let answer = 0;
    while (answer != "q" && answer != product){
        answer = prompt(equation);
        if (answer == "q"){
            alert("Quitter!");
            wrong = 2;
        }
        else if (answer == product) alert("Correct!");
        else {
            alert("Incorrect");
            wrong = 1;   
        } 
    }
    return wrong;
}
