//Time Till 90 years old calculator
var age = prompt("Enter your age")
var yearsLeft= (90 - age);
var monthsLeft= (yearsLeft * 12);
var weeksLeft= (yearsLeft * 52);
var daysLeft= (yearsLeft * 365);
console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left until 90 years old.");



// BMI calculator
function bmiCalculator(weight, height) {
    var bmi=Math.floor(weight / (height * height))
    return bmi
}
console.log(bmiCalculator(65, 1.8));

// BMI calculator with else if returns
function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);
    if (bmi<18.5) {
      return "Your BMI is " + bmi + ", so you are underweight.";
    } 
        if (bmi>=18.5 && bmi<=24.9) {
      return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
      return "Your BMI is " + bmi + ", so you are overweight.";
    }
}



//Love Match Calculator
var you= prompt("Enter your name.");
var love= prompt("Enter your love interest.");
function loveMatch() {
    var n= Math.random();
    if (you=="Kevin Leister", love=="Ariana Grande") {
        n=100;
        return n;
    } else {
        
    n= Math.floor(n * 101);
    return n;
    }
}

alert(you + " and " + love + " are a " + loveMatch() + "% match.");



//Leap Year Calculator
function isLeap(year) {
  
    if (year % 4==0 || year % 400==0 && year % 100!==0){
        return "Leap year."
    } else {
        return "Not leap year."
    }
    }
    console.log(isLeap(1989));
    


    //