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



//