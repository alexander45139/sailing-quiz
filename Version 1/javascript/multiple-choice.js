var score = 0;
var questions = ["Question1()", "Question2()","Question3()","Question4()","Question5()","Question6()","Question7()","Question8()","Question9()","Question10()"];
var Questions = [];
var Answers = [];
var x = 0;
while (x < 22) {
    var r = Math.floor((Math.random() * 10) + 0);
    questions.push(questions[r]);
    delete questions[r];
    var x = x + 1;
}
var x = 0
while (x < 22) {
    if (!(questions[x] == undefined)) {
        Questions.push(questions[x]);
    }
    var x = x + 1;
}
Questions.push("End()")
var y = Questions.length - 1;

function start() {
    n = 0;
    document.getElementById("b").innerHTML = '<button class="button2" onclick="' + Questions[n] +'">Next</button>';
    document.getElementById("question").innerHTML = '<p>There are ' + y + ' questions with 4 options below for each Question. Click on one of them (to answer each question) and then click on "Next Question". </p><b>Press the "Next" button above.</b>';
}

function Correct1() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>';
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>';
    document.getElementById("option1").innerHTML = '<button disabled class="button2">General Recall</button>';
    document.getElementById("option2").innerHTML = '<button disabled class="button1">Postpone</button>';
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Start Line</button>';
    document.getElementById("option4").innerHTML = '<button disabled class="button2">Penulty</button>';
}
function Incorrect1() {
    Answers.push("<img src='images/A1.jpg' />");
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>';
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>';
    document.getElementById("option1").innerHTML = '<button disabled class="button2">General Recall</button>';
    document.getElementById("option2").innerHTML = '<button disabled class="button1">Postpone</button>';
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Start Line</button>';
    document.getElementById("option4").innerHTML = '<button disabled class="button2">Penulty</button>';
}
function Correct2() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>';
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>';
    document.getElementById("option1").innerHTML = '<button disabled class="button1">Individual Recall and General Recall</button>';
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Shortened Course and Penulty</button>';
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Class Flags</button>';
    document.getElementById("option4").innerHTML = '<button disabled class="button2">Keep Clear and Protest</button>';
}
function Incorrect2() {
    Answers.push("<img src='images/A2.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>';
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>';
    document.getElementById("option1").innerHTML = '<button disabled class="button1">Individual Recall and General Recall</button>';
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Shortened Course and Penulty</button>';
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Class Flags</button>';
    document.getElementById("option4").innerHTML = '<button disabled class="button2">Keep Clear and Protest</button>';
}
function Correct3() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>';
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>';
    document.getElementById("option1").innerHTML = '<button disabled class="button2">Purple</button>';
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Orange</button>';
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Green</button>';
    document.getElementById("option4").innerHTML = '<button disabled class="button1">Red</button>';
}
function Incorrect3() {
    Answers.push("<img src='images/A3.jpg' />");
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>';
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>';
    document.getElementById("option1").innerHTML = '<button disabled class="button2">Purple</button>';
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Orange</button>';
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Green</button>';
    document.getElementById("option4").innerHTML = '<button disabled class="button1">Red</button>';
}
function Correct4() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>';
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>';
    document.getElementById("option1").innerHTML = '<button disabled class="button2">Blue</button>';
    document.getElementById("option2").innerHTML = '<button disabled class="button1">Yellow</button>';
    document.getElementById("option3").innerHTML = '<button disabled class="button2">None</button>';
    document.getElementById("option4").innerHTML = '';
}
function Incorrect4() {
    Answers.push("<img src='images/A4.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>';
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>';
    document.getElementById("option1").innerHTML = '<button disabled class="button2">Blue</button>';
    document.getElementById("option2").innerHTML = '<button disabled class="button1">Yellow</button>';
    document.getElementById("option3").innerHTML = '<button disabled class="button2">None</button>';
    document.getElementById("option4").innerHTML = '';
}
function Correct5() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>';
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>';
    document.getElementById("option1").innerHTML = '<button disabled class="button1">Blue</button>';
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Yellow</button>';
    document.getElementById("option3").innerHTML = '<button disabled class="button2">None</button>';
    document.getElementById("option4").innerHTML = '';
}
function Incorrect5() {
    Answers.push("<img src='images/A5.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>';
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>';
    document.getElementById("option1").innerHTML = '<button disabled class="button1">Blue</button>';
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Yellow</button>';
    document.getElementById("option3").innerHTML = '<button disabled class="button2">None</button>';
    document.getElementById("option4").innerHTML = ''
}
function Incorrect6() {
    Answers.push("<img src='images/A6.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>';
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>';
    document.getElementById("option1").innerHTML = '<button disabled class="button1">Blue</button>';
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Yellow</button>';
    document.getElementById("option3").innerHTML = '<button disabled class="button2">None</button>';
    document.getElementById("option4").innerHTML = '';
}
function Correct7() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>';
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>';
    document.getElementById("option1").innerHTML = '<button disabled class="button2">Yellow shouts for water so that Blue jibes to keep clear of Yellow</button>';
    document.getElementById("option2").innerHTML = '<button disabled class="button1">Blue shouts for water so that Yellow tacks to give room for Blue to tack</button>';
    document.getElementById("option3").innerHTML = '';
    document.getElementById("option4").innerHTML = '';
}
function Incorrect7() {
    Answers.push("<img src='images/A7.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>';
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>';
    document.getElementById("option1").innerHTML = '<button disabled class="button2">Yellow shouts for water so that Blue jibes to keep clear of Yellow</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button1">Blue shouts for water so that Yellow tacks to give room for Blue to tack</button>'
    document.getElementById("option3").innerHTML = ''
    document.getElementById("option4").innerHTML = ''
}
function Correct8() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">No, never</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Yes, anytime</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button1">No, unless making contact with Yellow</button>'
    document.getElementById("option4").innerHTML = '<button disabled class="button2">Yes, but Yellow must keep clear</button>'
}
function Incorrect8() {
    Answers.push("<img src='images/A8.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">No, never</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Yes, anytime</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button1">No, unless making contact with Yellow</button>'
    document.getElementById("option4").innerHTML = '<button disabled class="button2">Yes, but Yellow must keep clear</button>'
}
function Correct9() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button1">Shortened Course and Abandon Race</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Follow Me and Replace Missing Mark</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Fishing Boat on Location and Position of Next Mark Changed</button>'
    document.getElementById("option4").innerHTML = '<button disabled class="button2">No Penalty System and Disqualified if Over the Line</button>'
}
function Incorrect9() {
    Answers.push("<img src='images/A9.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button1">Shortened Course and Abandon Race</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Follow Me and Replace Missing Mark</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Fishing Boat on Location and Position of Next Mark Changed</button>'
    document.getElementById("option4").innerHTML = '<button disabled class="button2">No Penalty System and Disqualified if Over the Line</button>'
}
function Correct10() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">720</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button1">360</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">180</button>'
    document.getElementById("option4").innerHTML = ''
}
function Incorrect10() {
    Answers.push("<img src='images/A10.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">720</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button1">360</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">180</button>'
    document.getElementById("option4").innerHTML = ''
}

function Question1() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "What does this flag mean?"
    document.getElementById("image").innerHTML = '<img src="Q1.jpg" />'
    document.getElementById("option1").innerHTML = '<button onclick="Incorrect1()">General Recall</button>'
    document.getElementById("option2").innerHTML = '<button onclick="Correct1()">Postpone</button>'
    document.getElementById("option3").innerHTML = '<button onclick="Incorrect1()">Start Line</button>'
    document.getElementById("option4").innerHTML = '<button onclick="Incorrect1()">Penulty</button>'
}
function Question2() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    if (n > 9) {
        document.getElementById("b").innerHTML = '<button onclick="End()">Finish</button>'
    }
    document.getElementById("question").innerHTML = "What do these flags mean?"
    document.getElementById("image").innerHTML = '<img src="images/Q2.gif" />'
    document.getElementById("option1").innerHTML = '<button onclick="Correct2()">Individual Recall and General Recall</button>'
    document.getElementById("option2").innerHTML = '<button onclick="Incorrect2()">Shortened Course and Penulty</button>'
    document.getElementById("option3").innerHTML = '<button onclick="Incorrect2()">Class Flags</button>'
    document.getElementById("option4").innerHTML = '<button onclick="Incorrect2()">Keep Clear and Protest</button>'
}
function Question3() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Which colour flag on a buoy represents 'to port'?"
    document.getElementById("image").innerHTML = ''
    document.getElementById("option1").innerHTML = '<button onclick="Incorrect3()">Purple</button>'
    document.getElementById("option2").innerHTML = '<button onclick="Incorrect3()">Orange</button>'
    document.getElementById("option3").innerHTML = '<button onclick="Incorrect3()">Green</button>'
    document.getElementById("option4").innerHTML = '<button onclick="Correct3()">Red</button>'
}
function Question4() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Which boat needs to stay clear?"
    document.getElementById("image").innerHTML = '<img src="images/Q4.jpg" />'
    document.getElementById("option1").innerHTML = '<button onclick="Incorrect4()">Blue</button>'
    document.getElementById("option2").innerHTML = '<button onclick="Correct4()">Yellow</button>'
    document.getElementById("option3").innerHTML = '<button onclick="Incorrect4()">None</button>'
    document.getElementById("option4").innerHTML = ''
}
function Question5() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Who has more right for water? (HINT: Start line!)"
    document.getElementById("image").innerHTML = '<img src="images/Q5.jpg" />'
    document.getElementById("option1").innerHTML = '<button onclick="Correct5()">Blue</button>'
    document.getElementById("option2").innerHTML = '<button onclick="Incorrect5()">Yellow</button>'
    document.getElementById("option3").innerHTML = '<button onclick="Incorrect5()">None</button>'
    document.getElementById("option4").innerHTML = ''
}
function Question6() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Which colour boats are <b>not</b> to windward?"
    document.getElementById("image").innerHTML = '<img src="images/Q6.png" />'
    document.getElementById("option1").innerHTML = '<button onclick="Correct5()">Blue</button>'
    document.getElementById("option2").innerHTML = '<button onclick="Incorrect6()">Yellow</button>'
    document.getElementById("option3").innerHTML = '<button onclick="Incorrect6()">None</button>'
    document.getElementById("option4").innerHTML = ''
}
function Question7() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "What should happen?"
    document.getElementById("image").innerHTML = '<img src="images/Q7.png" />'
    document.getElementById("option1").innerHTML = '<button onclick="Incorrect7()">Yellow shouts for water so that Blue jibes to keep clear of Yellow</button>'
    document.getElementById("option2").innerHTML = '<button onclick="Correct7()">Blue shouts for water so that Yellow tacks to give room for Blue to tack</button>'
    document.getElementById("option3").innerHTML = ''
    document.getElementById("option4").innerHTML = ''
}
function Question8() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Can Blue change course?"
    document.getElementById("image").innerHTML = '<img src="images/Q8.jpg" />'
    document.getElementById("option1").innerHTML = '<button onclick="Incorrect8()">No, never</button>'
    document.getElementById("option2").innerHTML = '<button onclick="Incorrect8()">Yes, anytime</button>'
    document.getElementById("option3").innerHTML = '<button onclick="Correct8()">No, unless making contact with Yellow</button>'
    document.getElementById("option4").innerHTML = '<button onclick="Incorrect8()">Yes, but Yellow must keep clear</button>'
}
function Question9() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Name the flags below:"
    document.getElementById("image").innerHTML = '<img src="images/Q9.png" />'
    document.getElementById("option1").innerHTML = '<button onclick="Correct9()">Shortened Course and Abandon Race</button>'
    document.getElementById("option2").innerHTML = '<button onclick="Incorrect9()">Follow Me and Replace Missing Mark</button>'
    document.getElementById("option3").innerHTML = '<button onclick="Incorrect9()">Fishing Boat on Location and Position of Next Mark Changed</button>'
    document.getElementById("option4").innerHTML = '<button onclick="Incorrect9()">No Penalty System and Disqualified if Over the Line</button>'
}
function Question10() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "How many turns (in degrees)?"
    document.getElementById("image").innerHTML = '<img src="images/Q10.jpg" />'
    document.getElementById("option1").innerHTML = '<button onclick="Incorrect10()">720</button>'
    document.getElementById("option2").innerHTML = '<button onclick="Correct10()">360</button>'
    document.getElementById("option3").innerHTML = '<button onclick="Incorrect10()">180</button>'
    document.getElementById("option4").innerHTML = ''
}

function End() {
    x = y / 2
    z = x - 1
    if (score == y) {
        message = "Congratulations!"
    }
    else if (score > z) {
        message = "Well Done!"
    }
    else if (score < x) {
        message = "Bad Luck!"
    }
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("score").innerHTML = ""
    document.getElementById("question").innerHTML = message + " You've got " + score + " out of " + y + "!"
    document.getElementById("image").innerHTML = ''
    document.getElementById("option1").innerHTML = '<button class="button1" onclick="Show_Answers()">Show Answers</button>'
    if (score == y) {
        Answers.push("There are no wrong answers.")
    }
    document.getElementById("option2").innerHTML = ''
    document.getElementById("option3").innerHTML = ''
    document.getElementById("option4").innerHTML = ''
}

function Show_Answers() {
    document.getElementById("option1").innerHTML = '<button class="button2" onclick="Hide_Answers()">Hide Answers</button>'
    document.getElementById("option2").innerHTML = "<p>" + Answers + "</p>"
}
function Hide_Answers() {
    document.getElementById("option1").innerHTML = '<button class="button1" onclick="Show_Answers()">Show Answers</button>'
    document.getElementById("option2").innerHTML = ''
}