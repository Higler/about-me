'use strict';

//Opening Question
let person = prompt('What is your name?');

alert('Its very nice to meet you ' + person);

console.log(person);

// Question 1
let years = prompt ('Do you think I have been writing code for 20 years?');

let normalizedyears = years.toLowerCase();

let correctcount = 0;

console.log(years);

if(normalizedyears === 'yes'){
  console.log('You are correct, but that makes me old!');
  alert('You are right, ' + years + ' that is a long time.');
  alert(`Yes, ${years} is correct`);
} else {
  console.log('Please try again...');
  alert('Incorrect');
}

//Question 2
let weird = prompt ('Would you beleive I can not only build a race car but also a video game?');

let normalizedweird = weird.toLowerCase();

let correctcount = 0;

console.log(weird);

if(normalizedweird === 'yes'){
  console.log('That is right, it is a unique combination!');
  alert('You are correct, ' + weird + ' it is not everyday you see that.');
  alert(`Yes, ${weird} is correct`);
} else {
  console.log('Please try again...');
  alert('Incorrect');
}

//Question 3
let plane = prompt ('Do you think I have launched air planes from the flight deck of a carrier?');

let normalizedplane = plane.toLowerCase();

let correctcount = 0;

console.log(plane);

if(normalizedplane === 'yes'){
  console.log('That is right, it is a unique combination!');
  alert('You are absolutely right, ' + plane + ' it was the biggest rush of my life everytime!');
  alert(`Yes, ${plane} is correct`);
} else {
  console.log('Please try again...');
  alert('Incorrect');
}

//Question 4
let cookies = prompt ('Do you think I can bake the premade cookies?');

let normalizedcookies = cookies.toLowerCase();

let correctcount = 0;

console.log(cookies);

if(normalizedcookies === 'no'){
  console.log('No kidding, something so easy and I over or under cook them every time!');
  alert( cookies + ' kidding it is very embarassing asking family and freinds to bake them for me!');
  alert(`Yes, ${cookies} is correct`);
} else {
  console.log('Please try again...');
  alert('Incorrect');
}

//Question 5
let doggy = prompt ('Do you think I had a dog that was in the news paper and called a local hero?');

let normalizeddoggy = doggy.toLowerCase();

let correctcount = 0;

console.log(doggy);

if(normalizeddoggy === 'yes'){
  console.log('I could not beleive it myself but it is true!');
  alert( doggy + ' he stopped and detained a home invader linked to 7 other home invasions, the police wanted to hire him!');
  alert(`Yes, ${doggy} is correct`);
} else {
  console.log('Please try again...');
  alert('Incorrect');
}

//Question 6
const statesvisited = 37;

const maxattempts = 4;

let attempts = 0;

let correctcount = 0;

function guessNumber() {
  if (attempts < maxattempts) {
    console.log( message );
    const userguess = prompt(`How many states have I visited? You have ${maxattempts - attempts} attempt(s) left:`);
    const userguessnumber = parseInt(userguess);

    if (!isNaN(userguessnumber)) {
      console.log( message );
      attempts++;

      if (userguessnumber === statesvisited) {
        console.log( message );
        alert(`You guessed the correct number in ${attempts} attempt(s).`);
      } else if (userguessnumber < statesvisited) {
        console.log( message );
        alert('Too low, try again.');
        guessNumber();
      } else {
        console.log( message );
        alert('Too high, try again.');
        guessNumber();
      }
    } else {
      console.log( message );
      alert('Please enter a number.');
      guessNumber();
    }
  } else {
    console.log( message );
    alert(`You've used all your attempts. The correct number was ${statesvisited}.`);
  }
}

guessNumber();

//Question 7
const correctcolors = ['black', 'green', 'red', 'orange'];

const maxtries = 6;

let tries = 0;

let correctanswer = false;

let correctcount = 0;

while (tries < maxtries && !correctanswer) {
  console.log( message );
  const usercolor = prompt(`What is my favorite color? You have ${maxtries - tries} attempt(s) left:`);

  if (correctcolors.includes(usercolor.toLowerCase())) {
    console.log( message );
    alert('That\'s one of the correct colors!');
    correctanswer = true;
  } else {
    console.log( message );
    alert('Sorry, that\'s not one of the correct colors.');
    tries++;
  }
}

if (!correctanswer) {
  console.log();
  alert(`You've used all your tries. The correct colors are: ${correctcolors(', ')}.`);
}



//Closing Question

alert(`Wow ` + person `you got ${correctcount} correct out of 7 questions!`);

console.log(`Total correct answers: ${correctcount}`);