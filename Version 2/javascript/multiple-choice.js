function RacingRules() {
    score = 0
    racingrules = ["racingrules1()", "racingrules2()","racingrules3()","racingrules4()","racingrules5()","racingrules6()","racingrules7()","racingrules8()","racingrules9()","racingrules10()"]
    RacingRules = []
    Answers = []
    x = 0
    while (x < 22) {
        r = Math.floor((Math.random() * 10) + 0)
        racingrules.push(racingrules[r])
        delete racingrules[r]
        x = x + 1
    }
    x = 0
    while (x < 22) {
        if (!(racingrules[x] == undefined)) {
            RacingRules.push(racingrules[x])
        }
        x = x + 1
    }
    RacingRules.push("End()")
    y = RacingRules.length - 1
    RacingRules[1]
}
function Flags() {
    score = 0
    flags = ["flags1()", "flags2()","flags3()","flags4()","flags5()","flags6()","flags7()","flags8()","flags9()","flags10()"]
    Flags = []
    Answers = []
    x = 0
    while (x < 22) {
        r = Math.floor((Math.random() * 10) + 0)
        flags.push(flags[r])
        delete flags[r]
        x = x + 1
    }
    x = 0
    while (x < 22) {
        if (!(flags[x] == undefined)) {
            Flags.push(flags[x])
        }
        x = x + 1
    }
    Flags.push("End()")
    y = Flags.length - 1
}
function SailingEfficiently() {
    score = 0
    sailingefficiently = ["sailingefficiently1()", "sailingefficiently2()","sailingefficiently3()","sailingefficiently4()","sailingefficiently5()","sailingefficiently6()","sailingefficiently7()","sailingefficiently8()","sailingefficiently9()","sailingefficiently10()"]
    SailingEfficiently = []
    Answers = []
    x = 0
    while (x < 22) {
        r = Math.floor((Math.random() * 10) + 0)
        sailingefficiently.push(sailingefficiently[r])
        delete sailingefficiently[r]
        x = x + 1
    }
    x = 0
    while (x < 22) {
        if (!(sailingefficiently[x] == undefined)) {
            SailingEfficiently.push(sailingefficiently[x])
        }
        x = x + 1
    }
    SailingEfficiently.push("End()")
    y = SailingEfficiently.length - 1
}

function start() {
    n = 0
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = '<p>Which topic would you like to be tested on?</p><button onclick="RacingRules()">Racing Rules</button>  <button onclick="Flags()">Flags</button>  <button onclick="SailingEfficiently()">Sailing Efficiently</button>'
}

function RRCorrect1() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">General Recall</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button1">Postpone</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Start Line</button>'
    document.getElementById("option4").innerHTML = '<button disabled class="button2">Penulty</button>'
}
function RRIncorrect1() {
    Answers.push("<img src='images/A1.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">General Recall</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button1">Postpone</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Start Line</button>'
    document.getElementById("option4").innerHTML = '<button disabled class="button2">Penulty</button>'
}
function RRCorrect2() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button1">Individual Recall and General Recall</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Shortened Course and Penulty</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Class Flags</button>'
    document.getElementById("option4").innerHTML = '<button disabled class="button2">Keep Clear and Protest</button>'
}
function RRIncorrect2() {
    Answers.push("<img src='images/A2.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button1">Individual Recall and General Recall</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Shortened Course and Penulty</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Class Flags</button>'
    document.getElementById("option4").innerHTML = '<button disabled class="button2">Keep Clear and Protest</button>'
}
function RRCorrect3() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">Purple</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Orange</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Green</button>'
    document.getElementById("option4").innerHTML = '<button disabled class="button1">Red</button>'
}
function RRIncorrect3() {
    Answers.push("<img src='images/A3.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">Purple</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Orange</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Green</button>'
    document.getElementById("option4").innerHTML = '<button disabled class="button1">Red</button>'
}
function RRCorrect4() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">Blue</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button1">Yellow</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">None</button>'
    document.getElementById("option4").innerHTML = ''
}
function RRIncorrect4() {
    Answers.push("<img src='images/A4.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">Blue</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button1">Yellow</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">None</button>'
    document.getElementById("option4").innerHTML = ''
}
function RRCorrect5() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button1">Blue</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Yellow</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">None</button>'
    document.getElementById("option4").innerHTML = ''
}
function RRIncorrect5() {
    Answers.push("<img src='images/A5.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button1">Blue</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Yellow</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">None</button>'
    document.getElementById("option4").innerHTML = ''
}
function RRIncorrect6() {
    Answers.push("<img src='images/A6.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button1">Blue</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Yellow</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">None</button>'
    document.getElementById("option4").innerHTML = ''
}
function RRCorrect7() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">Yellow shouts for water so that Blue jibes to keep clear of Yellow</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button1">Blue shouts for water so that Yellow tacks to give room for Blue to tack</button>'
    document.getElementById("option3").innerHTML = ''
    document.getElementById("option4").innerHTML = ''
}
function RRIncorrect7() {
    Answers.push("<img src='images/A7.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">Yellow shouts for water so that Blue jibes to keep clear of Yellow</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button1">Blue shouts for water so that Yellow tacks to give room for Blue to tack</button>'
    document.getElementById("option3").innerHTML = ''
    document.getElementById("option4").innerHTML = ''
}
function RRCorrect8() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">No, never</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Yes, anytime</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button1">No, unless making contact with Yellow</button>'
    document.getElementById("option4").innerHTML = '<button disabled class="button2">Yes, but Yellow must keep clear</button>'
}
function RRIncorrect8() {
    Answers.push("<img src='images/A8.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">No, never</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Yes, anytime</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button1">No, unless making contact with Yellow</button>'
    document.getElementById("option4").innerHTML = '<button disabled class="button2">Yes, but Yellow must keep clear</button>'
}
function RRCorrect9() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button1">Shortened Course and Abandon Race</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Follow Me and Replace Missing Mark</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Fishing Boat on Location and Position of Next Mark Changed</button>'
    document.getElementById("option4").innerHTML = '<button disabled class="button2">No Penalty System and Disqualified if Over the Line</button>'
}
function RRIncorrect9() {
    Answers.push("<img src='images/A9.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button1">Shortened Course and Abandon Race</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button2">Follow Me and Replace Missing Mark</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">Fishing Boat on Location and Position of Next Mark Changed</button>'
    document.getElementById("option4").innerHTML = '<button disabled class="button2">No Penalty System and Disqualified if Over the Line</button>'
}
function RRCorrect10() {
    score = score + 1
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">720</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button1">360</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">180</button>'
    document.getElementById("option4").innerHTML = ''
}
function RRIncorrect10() {
    Answers.push("<img src='images/A10.jpg' />")
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b>'
    document.getElementById("option1").innerHTML = '<button disabled class="button2">720</button>'
    document.getElementById("option2").innerHTML = '<button disabled class="button1">360</button>'
    document.getElementById("option3").innerHTML = '<button disabled class="button2">180</button>'
    document.getElementById("option4").innerHTML = ''
}

function RacingRules1() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "What does this flag mean?"
    document.getElementById("image").innerHTML = '<img src="images/Q1.jpg" />'
    document.getElementById("option1").innerHTML = '<button onclick="RRIncorrect1()">General Recall</button>'
    document.getElementById("option2").innerHTML = '<button onclick="RRCorrect1()">Postpone</button>'
    document.getElementById("option3").innerHTML = '<button onclick="RRIncorrect1()">Start Line</button>'
    document.getElementById("option4").innerHTML = '<button onclick="RRIncorrect1()">Penulty</button>'
}
function RacingRules2() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    if (n > 9) {
        document.getElementById("b").innerHTML = '<button onclick="End()">Finish</button>'
    }
    document.getElementById("question").innerHTML = "What do these flags mean?"
    document.getElementById("image").innerHTML = '<img src="images/Q2.gif" />'
    document.getElementById("option1").innerHTML = '<button onclick="RRCorrect2()">Individual Recall and General Recall</button>'
    document.getElementById("option2").innerHTML = '<button onclick="RRIncorrect2()">Shortened Course and Penulty</button>'
    document.getElementById("option3").innerHTML = '<button onclick="RRIncorrect2()">Class Flags</button>'
    document.getElementById("option4").innerHTML = '<button onclick="RRIncorrect2()">Keep Clear and Protest</button>'
}
function RacingRules3() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Which colour flag on a buoy represents 'to port'?"
    document.getElementById("image").innerHTML = ''
    document.getElementById("option1").innerHTML = '<button onclick="RRIncorrect3()">Purple</button>'
    document.getElementById("option2").innerHTML = '<button onclick="RRIncorrect3()">Orange</button>'
    document.getElementById("option3").innerHTML = '<button onclick="RRIncorrect3()">Green</button>'
    document.getElementById("option4").innerHTML = '<button onclick="RRCorrect3()">Red</button>'
}
function RacingRules4() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Which boat needs to stay clear?"
    document.getElementById("image").innerHTML = '<img src="images/Q4.jpg" />'
    document.getElementById("option1").innerHTML = '<button onclick="RRIncorrect4()">Blue</button>'
    document.getElementById("option2").innerHTML = '<button onclick="RRCorrect4()">Yellow</button>'
    document.getElementById("option3").innerHTML = '<button onclick="RRIncorrect4()">None</button>'
    document.getElementById("option4").innerHTML = ''
}
function RacingRules5() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Who has more right for water? (HINT: Start line!)"
    document.getElementById("image").innerHTML = '<img src="images/Q5.jpg" />'
    document.getElementById("option1").innerHTML = '<button onclick="RRCorrect5()">Blue</button>'
    document.getElementById("option2").innerHTML = '<button onclick="RRIncorrect5()">Yellow</button>'
    document.getElementById("option3").innerHTML = '<button onclick="RRIncorrect5()">None</button>'
    document.getElementById("option4").innerHTML = ''
}
function RacingRules6() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Which colour boats are <b>not</b> to windward?"
    document.getElementById("image").innerHTML = '<img src="images/Q6.png" />'
    document.getElementById("option1").innerHTML = '<button onclick="RRCorrect5()">Blue</button>'
    document.getElementById("option2").innerHTML = '<button onclick="RRIncorrect6()">Yellow</button>'
    document.getElementById("option3").innerHTML = '<button onclick="RRIncorrect6()">None</button>'
    document.getElementById("option4").innerHTML = ''
}
function RacingRules7() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "What should happen?"
    document.getElementById("image").innerHTML = '<img src="images/Q7.png" />'
    document.getElementById("option1").innerHTML = '<button onclick="RRIncorrect7()">Yellow shouts for water so that Blue jibes to keep clear of Yellow</button>'
    document.getElementById("option2").innerHTML = '<button onclick="RRCorrect7()">Blue shouts for water so that Yellow tacks to give room for Blue to tack</button>'
    document.getElementById("option3").innerHTML = ''
    document.getElementById("option4").innerHTML = ''
}
function RacingRules8() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Can Blue change course?"
    document.getElementById("image").innerHTML = '<img src="images/Q8.jpg" />'
    document.getElementById("option1").innerHTML = '<button onclick="RRIncorrect8()">No, never</button>'
    document.getElementById("option2").innerHTML = '<button onclick="RRIncorrect8()">Yes, anytime</button>'
    document.getElementById("option3").innerHTML = '<button onclick="RRCorrect8()">No, unless making contact with Yellow</button>'
    document.getElementById("option4").innerHTML = '<button onclick="RRIncorrect8()">Yes, but Yellow must keep clear</button>'
}
function RacingRules9() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Name the flags below:"
    document.getElementById("image").innerHTML = '<img src="images/Q9.png" />'
    document.getElementById("option1").innerHTML = '<button onclick="RRCorrect9()">Shortened Course and Abandon Race</button>'
    document.getElementById("option2").innerHTML = '<button onclick="RRIncorrect9()">Follow Me and Replace Missing Mark</button>'
    document.getElementById("option3").innerHTML = '<button onclick="RRIncorrect9()">Fishing Boat on Location and Position of Next Mark Changed</button>'
    document.getElementById("option4").innerHTML = '<button onclick="RRIncorrect9()">No Penalty System and Disqualified if Over the Line</button>'
}
function RacingRules10() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "How many turns (in degrees)?"
    document.getElementById("image").innerHTML = '<img src="images/Q10.jpg" />'
    document.getElementById("option1").innerHTML = '<button onclick="RRIncorrect10()">720</button>'
    document.getElementById("option2").innerHTML = '<button onclick="RRCorrect10()">360</button>'
    document.getElementById("option3").innerHTML = '<button onclick="RRIncorrect10()">180</button>'
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