$(document).ready(function () {

    //create your list of questions and correct answers

    var questionList = [
        {
            q: "The cool down after exercise is important because it:",
            a: "Speeds the removal of lactic acid"
        },
        {
            q: "Why is warming up before exercise important?",
            a: "It improves flexibility"
        }
    ];

    //create an object for your variables
    var gameData = {
        correctAnswer: 0,
        inCorrectAnswer: 0,
        unAswered: 0,
        count: 0
    }

    //create a function to setup the game
    function setupGame() {
        //correctAnswer: 0,inCorrectAnswer: 0, unAswered: 0,

    }


    //create a function to play the game
    function playGame() {
        //first page, how to make pages/slides and put the same title on all of them??????

        //create a button to press and start
        var newButton = $('<button>')
        newButton.text("Start")
        newButton.addClass('startButton')
        $('#container').append(newButton)
        $('.startButton').on('click', function(){
            //game will be started
        });
        //go to next page

        //set the timer

        //if the count was less than or equal to length of questionlist
        if (gameData.count <= questionList.length - 1) {
            var currentQuestion = questionList[gameData.count].q
            //display the current question in the html and changing the text to the current qustion?????

            //show the options for answers

            //create click to answer Q

            //if/else statement for correct, incorrect and time up conditions
            //if the answer was wrong:

            //incorrect answer++, 
            //shows the result(correct answer) in the next slide, 
            //wait 5 seconds, then go to next slide(question) 
            //if the answer was correct:

            //correct answer++, 
            //shows the result(correct answer) in the next slide, 
            //wait 5 seconds, then go to next slide(question) 
            
            //else/ no answer
            //unanswered++, 
            //shows the result(correct answer) in the next slide, 
            //wait 5 seconds, then go to next slide(question)

        } else {
            //stop the timer
            //all done. here is your result
            //do u wanna start over?
        }

        setupGame();
    }

    playGame();

});