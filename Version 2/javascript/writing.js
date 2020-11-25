function start() {
    n = 0
    document.getElementById("b").innerHTML = '<button class="button2" onclick="' + Questions[n] +'">Next</button>'
    document.getElementById("t").innerHTML = '<input id="textbox" type="text" placeholder="Type your answer here..." />'
    document.getElementById("question").innerHTML = '<p>There are ' + y + ' questions. Click on one of them (to answer each question) and then click on "Next Question". </p><b>Press the "Next" button above.</b>'
}

function RacingRules() {
    var score = 0
    var racingrules = ["racingrules1()", "racingrules2()","racingrules3()","racingrules4()","racingrules5()","racingrules6()","racingrules7()","racingrules8()","racingrules9()","racingrules10()"]
    var RacingRules = []
    var Answers = []
    var x = 0
    while (x < 22) {
        var r = Math.floor((Math.random() * 10) + 0)
        racingrules.push(racingrules[r])
        delete racingrules[r]
        var x = x + 1
    }
    var x = 0
    while (x < 22) {
        if (!(racingrules[x] == undefined)) {
            RacingRules.push(racingrules[x])
        }
        var x = x + 1
    }
    RacingRules.push("End()")
    var y = RacingRules.length - 1
}
function Flags() {
    var score = 0
    var flags = ["flags1()", "flags2()","flags3()","flags4()","flags5()","flags6()","flags7()","flags8()","flags9()","flags10()"]
    var Flags = []
    var Answers = []
    var x = 0
    while (x < 22) {
        var r = Math.floor((Math.random() * 10) + 0)
        flags.push(flags[r])
        delete questions[r]
        var x = x + 1
    }
    var x = 0
    while (x < 22) {
        if (!(flags[x] == undefined)) {
            Flags.push(flags[x])
        }
        var x = x + 1
    }
    Flags.push("End()")
    var y = Flags.length - 1
}
function SailingEfficiently() {
    var score = 0
    var sailingefficiently = ["sailingefficiently1()", "sailingefficiently2()","sailingefficiently3()","sailingefficiently4()","sailingefficiently5()","sailingefficiently6()","sailingefficiently7()","sailingefficiently8()","sailingefficiently9()","sailingefficiently10()"]
    var SailingEfficiently = []
    var Answers = []
    var x = 0
    while (x < 22) {
        var r = Math.floor((Math.random() * 10) + 0)
        sailingefficiently.push(sailingefficiently[r])
        delete sailingefficiently[r]
        var x = x + 1
    }
    var x = 0
    while (x < 22) {
        if (!(sailingefficiently[x] == undefined)) {
            SailingEfficiently.push(sailingefficiently[x])
        }
        var x = x + 1
    }
    SailingEfficiently.push("End()")
    var y = SailingEfficiently.length - 1
}

function Check(w1,w2,w3,w4,nu) {
    document.getElementById("b").innerHTML = '<button onclick="' + Questions[n] +'">Next Question</button>'
    document.getElementById("submit").innerHTML = '<button class="check2" disabled>Check</button>'
    var answer = document.getElementById("textbox").value
    if (answer.includes(w1)) {
        score = score + 1
        document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    }
    else if (answer.includes(w2)) {
        score = score + 1
        document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    }
    else if (answer.includes(w3)) {
        score = score + 1
        document.getElementById("score").innerHTML = '<b class="green">Correct!</b>'
    }
    else {
        Answers.push("<img src='A" + n + ".jpg' />")
        document.getElementById("score").innerHTML = '<b class="red">Incorrect!</b><p>The answer is "' + w4 + '"!</p>'
    }
}

function Question1() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "What does this flag mean?"
    document.getElementById("image").innerHTML = '<img src="Q1.jpg" />'
    document.getElementById("textbox").value = ""
    word1 = "postpone"
    word2 = "Postpone"
    word3 = "POSTPONE"
    word4 = "Postpone Flag"
    document.getElementById("submit").innerHTML = '<button class="check1" onclick="Check(word1,word2,word3,word4,1)">Check</button>'
}
function Question2() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "What does the flag <b>on the left</b> mean?"
    document.getElementById("image").innerHTML = '<img src="Q2.gif" />'
    document.getElementById("textbox").value = ""
    word1 = "individual"
    word2 = "Individual"
    word3 = "INDIVIDUAL"
    word4 = "Individual Recall"
    document.getElementById("submit").innerHTML = '<button class="check1" onclick="Check(word1,word2,word3,word4,2)">Check</button>'
}
function Question3() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Which colour flag on a buoy represents 'to port'?"
    document.getElementById("image").innerHTML = ''
    document.getElementById("textbox").value = ""
    word1 = "red"
    word2 = "Red"
    word3 = "RED"
    word4 = "Red"
    document.getElementById("submit").innerHTML = '<button class="check1" onclick="Check(word1,word2,word3,word4,3)">Check</button>'
}
function Question4() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Which boat needs to stay clear?"
    document.getElementById("image").innerHTML = '<img src="Q4.jpg" />'
    document.getElementById("textbox").value = ""
    word1 = "yellow"
    word2 = "Yellow"
    word3 = "YELLOW"
    word4 = "Yellow Boat"
    document.getElementById("submit").innerHTML = '<button class="check1" onclick="Check(word1,word2,word3,word4,4)">Check</button>'
}
function Question5() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Who has more right for water? (HINT: Start line!)"
    document.getElementById("image").innerHTML = '<img src="Q5.jpg" />'
    document.getElementById("textbox").value = ""
    word1 = "blue"
    word2 = "Blue"
    word3 = "BLUE"
    word4 = "Blue Boat"
    document.getElementById("submit").innerHTML = '<button class="check1" onclick="Check(word1,word2,word3,word4,5)">Check</button>'
}
function Question6() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Which colour boats are <b>not</b> to windward?"
    document.getElementById("image").innerHTML = '<img src="Q6.png" />'
    document.getElementById("textbox").value = ""
    word1 = "blue"
    word2 = "Blue"
    word3 = "BLUE"
    word4 = "Blue"
    document.getElementById("submit").innerHTML = '<button class="check1" onclick="Check(word1,word2,word3,word4,6)">Check</button>'
}
function Question7() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Which colour boat should tack first?"
    document.getElementById("image").innerHTML = '<img src="Q7.png" />'
    document.getElementById("textbox").value = ""
    word1 = "yellow"
    word2 = "Yellow"
    word3 = "YELLOW"
    word4 = "Yellow"
    document.getElementById("submit").innerHTML = '<button class="check1" onclick="Check(word1,word2,word3,word4,7)">Check</button>'
}
function Question8() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Can Blue change course?"
    document.getElementById("image").innerHTML = '<img src="Q8.jpg" />'
    document.getElementById("textbox").value = ""
    word1 = "no"
    word2 = "No"
    word3 = "NO"
    word4 = "No"
    document.getElementById("submit").innerHTML = '<button class="check1" onclick="Check(word1,word2,word3,word4,8)">Check</button>'
}
function Question9() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "Name the flag on the right:"
    document.getElementById("image").innerHTML = '<img src="Q9.png" />'
    document.getElementById("textbox").value = ""
    word1 = "abandon"
    word2 = "Abandon"
    word3 = "ABANDON"
    word4 = "Abandon Race"
    document.getElementById("submit").innerHTML = '<button class="check1" onclick="Check(word1,word2,word3,word4,9)">Check</button>'
}
function Question10() {
    n = n + 1
    document.getElementById("score").innerHTML = ""
    document.getElementById("b").innerHTML = '<button disabled>Next Question</button>'
    document.getElementById("question").innerHTML = "How many turns (in degrees)?"
    document.getElementById("image").innerHTML = '<img src="Q10.jpg" />'
    document.getElementById("textbox").value = ""
    word1 = "360"
    word2 = "three sixty"
    word3 = "Three Sixty"
    word4 = "360"
    document.getElementById("submit").innerHTML = '<button class="check1" onclick="Check(word1,word2,word3,word4,10)">Check</button>'
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
    document.getElementById("t").innerHTML = ''
    document.getElementById("submit").innerHTML = '<button class="button1" onclick="Show_Answers()">Show Answers</button>'
    if (score == y) {
        Answers.push("There are no wrong answers.")
    }
    document.getElementById("score").innerHTML = ''
}

function Show_Answers() {
    document.getElementById("submit").innerHTML = '<button class="button2" onclick="Hide_Answers()">Hide Answers</button>'
    document.getElementById("score").innerHTML = "<p>" + Answers + "</p>"
}
function Hide_Answers() {
    document.getElementById("submit").innerHTML = '<button class="button1" onclick="Show_Answers()">Show Answers</button>'
    document.getElementById("score").innerHTML = ''
}