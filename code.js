//Time Till 90 years old calculator
var age = prompt("Enter your age")
var yearsLeft = (90 - age);
var monthsLeft = (yearsLeft * 12);
var weeksLeft = (yearsLeft * 52);
var daysLeft = (yearsLeft * 365);
console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left until 90 years old.");



// BMI calculator
function bmiCalculator(weight, height) {
    var bmi = Math.floor(weight / (height * height))
    return bmi
}
console.log(bmiCalculator(65, 1.8));

// BMI calculator with else if returns
function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
}



//Love Match Calculator
var you = prompt("Enter your name.");
var love = prompt("Enter your love interest.");

function loveMatch() {
    var n = Math.random();
    if (you == "Kevin Leister", love == "Ariana Grande") {
        n = 100;
        return n;
    } else {

        n = Math.floor(n * 101);
        return n;
    }
}

alert(you + " and " + love + " are a " + loveMatch() + "% match.");



//Leap Year Calculator
function isLeap(year) {

    if (year % 4 !== 0) {
        return "Not leap year."
    }

    if (year % 100 == 0 && year % 400 !== 0) {
        return "Not leap year."
    } else {
        return "Leap year."
    }
}
console.log(isLeap(2000));



//Guest List Checker
var guestName = prompt("What is your name?");

var guestList = ["Angela", "Jack", "Pam", "James", "Kevin", "Jason"];

if (guestList.includes(guestName)) {
    alert("Welcome " + guestName + ", you are a plus member and may enter.");
} else {
    alert("Sorry " + guestName + ", you are not on the guest list and may not enter. Maybe your executive membership will get you into saks.")
}



//fizzBuzz
var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100) {
        if (count % 3 == 0 && count % 5 == 0) {
            output.push("FizzBuzz");
        } else if (count % 3 == 0) {
            output.push("Fizz");
        } else if (count % 5 == 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}



//Who is Buying Lunch
function whosPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(numberOfPeople * Math.random());
    var whoPays = names[randomPersonPosition];
    return whoPays + " is going to buy lunch today!";
}

whosPaying(["Kevin", "Aubree", "Khloe", "Noah", "Aj", "Lorena", "Arlo"]);



//99 Bottles of Beer on the Wall
var beer = 99;

function onTheWall() {
    while (beer > 0) {
        if (beer > 2) {
            console.log(beer + " bottles of beer on the wall, " + beer + " bottles of beer.");
            beer--;
            console.log(" Take one down and pass it around, " + beer + " bottles of beer on the wall.");
        } else if (beer == 2) {
            console.log(beer + " bottles of beer on the wall, " + beer + " bottles of beer.");
            beer--;
            console.log(" Take one down and pass it around, " + beer + " bottle of beer on the wall.");
        } else {
            console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
            beer--;
        }
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}

//99 bottles v2
var beer = 99
var onWall = " of beer on the wall. "
var ofBeer = " of beer."
var takeOne = "Take one down, pass it around."
var noMore = "No more"
var goToStore = " Go to the store and buy some more, 99 bottles of beer on the wall."

while (beer > 0) {
    var bottleWord = " bottles";
    if (beer === 1) {
        bottleWord = " bottle";
    }
    console.log(beer + bottleWord + onWall + beer + bottleWord + ofBeer);
    console.log(takeOne);
    beer--;
    console.log(beer + bottleWord + onWall);

    if (beer === 0) {
        bottleWord = " bottles";
        console.log(noMore + bottleWord + onWall + noMore + bottleWord + ofBeer + goToStore);
    }
}



//Fibonacci Generator
function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        output = [0]
    } else if (n === 2) {
        output = [0, 1]
    } else {
        output = [0, 1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

fibonacciGenerator(7)