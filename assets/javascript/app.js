$("#quizContent").hide();

$("#beginQuiz").on("click", function () {
  $("#beginQuiz").hide();
  let number = 121;
  let intervalId;

  $("#stop").on("click", stop);

  $("#resume").on("click", run);
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {
    number--;

    //  Show the number in the #show-number tag.
    $("#timeDisplay").html("<h3>" + number + " Seconds Left!" + "</h3>");


    //  Once number hits zero stop the function
    if (number === 0) {
      stop();

      //  Display the user's score when time is up
      alert("Time is Up!");
    }
  }

  //  The stop function
  function stop() {
    clearInterval(intervalId);
  }

  //  Execute the run function.
  run();

  // Displays the full quiz questions and answers
  $("#quizContent").show();

});

let correctAnswers = 0;

$("#quizForm #q1").on("click", function () {

  console.log($("input:checked").val());

  if ($("input[name=question1]:checked").val() === "2001: A Space Odyssey") {
    console.log("Correct value selected!");
    correctAnswers++;
    console.log(correctAnswers);
  }
});

$("#quizForm #q2").on("click", function () {

  console.log($("input:checked").val());

  if ($("input[name=question2]:checked").val() === "The Departed") {
    console.log("Correct value for 2 selected!");
    correctAnswers++;
    console.log(correctAnswers);
  }
});

$("#quizForm #q3").on("click", function () {

  console.log($("input:checked").val());

  if ($("input[name=question3]:checked").val() === "Citizen Kane") {
    console.log("Correct value selected!");
    correctAnswers++;
    console.log(correctAnswers);
  }
});

$("#quizForm #q4").on("click", function () {

  console.log($("input:checked").val());

  if ($("input[name=question4]:checked").val() === "Casablanca") {
    console.log("Correct value selected!");
    correctAnswers++;
    console.log(correctAnswers);
  }
});

$("#quizForm #q5").on("click", function () {

  console.log($("input:checked").val());

  if ($("input[name=question5]:checked").val() === "Dr. Strangelove Or How I Learned to Stop Worrying and Love the Bomb") {
    console.log("Correct value selected!");
    correctAnswers++;
    console.log(correctAnswers);
  }
});

$("#quizForm #q6").on("click", function () {

  console.log($("input:checked").val());

  if ($("input[name=question6]:checked").val() === "Fight Club") {
    console.log("Correct value selected!");
    correctAnswers++;
    console.log(correctAnswers);
  }
});

$("#quizForm #q7").on("click", function () {

  console.log($("input:checked").val());

  if ($("input[name=question7]:checked").val() === "The Matrix") {
    console.log("Correct value selected!");
    correctAnswers++;
    console.log(correctAnswers);
  }
});

$("#quizForm #q8").on("click", function () {

  console.log($("input:checked").val());

  if ($("input[name=question8]:checked").val() === "Jurassic Park") {
    console.log("Correct value selected!");
    correctAnswers++;
    console.log(correctAnswers);
  }
});

$("#quizForm #q9").on("click", function () {

  console.log($("input:checked").val());

  if ($("input[name=question9]:checked").val() === "Children of Men") {
    console.log("Correct value selected!");
    correctAnswers++;
    console.log(correctAnswers);
  }
});

$("#quizForm #q10").on("click", function () {

  console.log($("input:checked").val());

  if ($("input[name=question10]:checked").val() === "Eternal Sunshine of the Spotless Mind") {
    console.log("Correct value selected!");
    correctAnswers++;
    console.log(correctAnswers);
  }
});


$("#submitButton").on("click", function () {

  event.preventDefault();
  $("#quizContent").hide();
  $("#timeDisplay").hide();
  $("#gameDescription").hide();

  $("#finalScore").html("<h2>Your final score is " + correctAnswers + "/10 Correct!" + "</h2>");
});
