$(document).ready(function () {

    //create your list of questions and correct answers

    var questionList = [
        {
            q: "The cool down after exercise is important because it:",
            opts: ["Improves oxygen uptake1", "Regulates breathing", "Speeds the removal of lactic acid", "Decreases adrenaline"],
            a: "Speeds the removal of lactic acid"
        },
        {
            q: "Why is warming up before exercise important?",
            opts: ["It improves flexibility", "It improves heart rate", "It decreases the removal of lactic acid", "It slows adrenaline release"],
            a: "It improves flexibility"
        },
        {
            q: "Which one of the following is a health screening test?",
            opts: ["Sit and reach test", "30m sprint test", "Blood pressure test", "Cooper’s 12 minute run test"],
            a: "Blood pressure test"

        },
        {
            q: "Which one of the following pairs of fitness components is yoga likely to develop?",
            opts: ["Flexibility and cardiovascular endurance", "Speed and flexibility", "Strength and flexibility", "Muscular endurance and cardio vascular endurance"],
            a: "Strength and flexibility"

        },
        {
            q: "Which one of the following pairs shows two good examples of characteristics of a balanced, healthy lifestyle?",
            opts: ["Non smoking and non active", "Nutritional diet and regular water drinking", "Non alcohol and low protein diet", "Physically active and smoking only a limited number of cigarettes."],
            a: "Nutritional diet and regular water drinking"

        },
        {
            q: "Which one of the following is an example of a performance goal?",
            opts: ["To win the competition", "To improve your technique", "To beat your personal best", "To please your coach "],
            a: "To improve your technique"
        },
        {
            q: "Which one of the following is a reason for not participating in physical activities?",
            opts: ["improving fitness", "developing personal skills", "improving mental health", "increasing risk of injury"],
            a: "increasing risk of injury"
        },
        {
            q: "Which one of the following is an example of a food high in carbohydrates?",
            opts: ["Fish", "Bananas", "Meat", "Eggs"],
            a: "Bananas"
        },
        {
            q: "Which one of the following would be a good method of exercise to improve your stamina?",
            opts: ["Yoga", "Pilates", "Sprinting", "Aerobics"],
            a: "It improves flexibility"
        },
        {
            q: "Which one of the following is an essential component of a healthy diet?",
            opts: ["Pasta", "Fish", "Water", "Bread"],
            a: "Water"
        }

    ];

    //create an object for your variables
    var gameData = {
        correctAnswer: 0,
        inCorrectAnswer: 0,
        unAswered: 0,
        count: 0,
        timer: null
    }

    $("#start").on("click", function () {
        console.log("start game!");

        // hide start button 
        $("#start").addClass("hide");
        // start and display timer
        startTimer()
        // show first question
        displayQuestion();
    });

    function startTimer() {
        // set initial time
        var remainingTime = 20;
        // show the existing text on the page by remove the hide class
        $("#timer").removeClass("hide");
        // display the initial time in the text that was show on the page after the hide class was removed.
        $("#remainingTime").text(remainingTime);

        // run instruction (function) every 1 second (1000)
        gameData.timer = setInterval(function () {
            $("#remainingTime").empty();
            // time (initial value 20) is 0 stop that function
            if (remainingTime === 0) {
                //The clearInterval() method clears a timer set with the setInterval() method.
                clearInterval(gameData.timer);
                // time is up 
                // check user answer
                // set time out
                // let user know if they got it right
                // show next question
                // reset timer
            }
            // time (initial value 20) is great than 0
            else {
                // reduce time by 1 every second
                remainingTime--;
                // redisplay time on page after its value is updated
                $("#remainingTime").text(remainingTime);

            }
        }, 1000);
    }


    // get selected value check if it right or wrong
    $(document).on("click", ".option", function () {

        console.log("clicked");
        // question number – button group number 
        var selectedBtnGroup = $(this).data("group");
        $("button[data-group='" + selectedBtnGroup + "']").removeClass("selected");
        $(this).addClass("selected");


        // console.log(userAnswer)
        // console.log(questionList[gameData.count].a)
        // // console.log(questionList[gameData.count])
        // console.log(gameData.count)
        evaluateAnswer();


    })


    function evaluateAnswer() {
        var userAnswer = $(".selected").text();
        if (userAnswer === questionList[gameData.count].a) {
            // user got it right
            console.log("yay! Correct");
            gameData.count++;
            gameData.correctAnswer++
            displayQuestion();

        }
        else {
            console.log("oh no")
            gameData.count++;
            gameData.inCorrectAnswer++
            displayQuestion();
        }
    }

    function displayQuestion() {
        console.log(gameData.count < questionList.length);
        if (gameData.count <= questionList.length) {
            clearInterval(gameData.timer);
            startTimer();
            $("#container").empty();
            
            var currentQuestion = questionList[gameData.count];

            var $wrapper = $("<div>");
            $wrapper.addClass("q-wrap");

            var $question = $("<h4>");
            $question.text(currentQuestion.q);
            $($wrapper).append($question);

            // handle options 
            currentQuestion.opts.forEach(function (opt) {

                var $optionButton = $("<button>");
                $optionButton.addClass("btn btn-primary option");
                $optionButton.attr("data-group", gameData.count);

                $optionButton.text(opt);

                $($wrapper).append($optionButton);
            });

            $("#container").append($wrapper);
        }

    }
    

    //create a function to setup the game
    function setupGame() {
        gameData.correctAnswer = 0;
        gameData.inCorrectAnswer = 0; 
        gameData.unAswered = 0;
        gameData.count = 0
    }


    // //create a function to play the game
    // function playGame() {
    //     

    //     //if the count was less than or equal to length of questionlist
    //     if (gameData.count <= questionList.length - 1) {
    //         var currentQuestion = questionList[gameData.count].q
    //         //display the current question in the html and changing the text to the current qustion?????

    //         //show the options for answers

    //         //create click to answer Q

    //         //if/else statement for correct, incorrect and time up conditions
    //         //if the answer was wrong:

    //         //incorrect answer++, 
    //         //shows the result(correct answer) in the next slide, 
    //         //wait 5 seconds, then go to next slide(question) 
    //         //if the answer was correct:

    //         //correct answer++, 
    //         //shows the result(correct answer) in the next slide, 
    //         //wait 5 seconds, then go to next slide(question) 

    //         //else/ no answer
    //         //unanswered++, 
    //         //shows the result(correct answer) in the next slide, 
    //         //wait 5 seconds, then go to next slide(question)

    //     } else {
    //         //stop the timer
    //         //all done.on the screen 
    //         //here is your result on the screen
    //         //do u wanna start over?
    //     }

    //     setupGame();
    // }

    // playGame();

});