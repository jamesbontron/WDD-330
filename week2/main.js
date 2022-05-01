/*Chapter 1 Code */
alert('Welcome to Quiz Ninja!');

/*Chapter 2 Code */
//Variables and use of prompt
const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);


/*Chapter 3 */
//Array of questions and Answers. It would work better with a list. Arrays work better for arithmetic computations holding the same data type
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

let score = 0 // initialize score
//Loop through the Array to know if the answer is true or not
for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}
//Score of the Game
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);


/*Chapter 4*/
//We are basacally passing the code of Chapter 3 into a function with additional features
function start(quiz){
    let score = 0;

    // main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop

    gameOver();

    // function declarations
    function ask(question){
        return prompt(question);
    }

    //checks the answer
    function check(response,answer){
        if(response === answer){
        alert('Correct!');
        //adds a point
        score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    }
    //Game Over Alert
    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
//calls the function
start(quiz);
