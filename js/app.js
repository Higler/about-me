'use strict';

//Opening Question
let person = prompt('What is your name?');

alert('Its very nice to meet you ' + person);

console.log(person);

let correctcount = 0;

// Question 1
function askYears(){
  let years = prompt ('Do you think I have been writing code for 20 years?');

  let normalizedyears = years.toLowerCase();

  console.log(years);

  if(normalizedyears === 'yes'){
    console.log('You are correct, but that makes me old!');
    alert('You are right, ' + years + ' that is a long time.');

    correctcount++;
  } else {
    console.log('Please try again...');
    alert('Incorrect');
  }
}
askYears();
//Question 2
function askWeird(){
  let weird = prompt ('Would you beleive I can not only build a race car but also a video game?');

  let normalizedweird = weird.toLowerCase();

  console.log(weird);

  if(normalizedweird === 'yes'){
    console.log('That is right, it is a unique combination!');
    alert('You are correct, ' + weird + ' it is not everyday you see that.');

    correctcount++;
  } else {
    console.log('Please try again...');
    alert('Incorrect');
  }
}
askWeird();
//Question 3
function askPlane(){
  let plane = prompt ('Do you think I have launched air planes from the flight deck of a carrier?');

  let normalizedplane = plane.toLowerCase();

  console.log(plane);

  if(normalizedplane === 'yes'){
    console.log('That is right, it is a unique combination!');
    alert('You are absolutely right, ' + plane + ' it was the biggest rush of my life everytime!');

    correctcount++;
  } else {
    console.log('Please try again...');
    alert('Incorrect');
  }
}
askPlane();
//Question 4
function askCookies(){
  let cookies = prompt ('Do you think I can bake the premade cookies?');

  let normalizedcookies = cookies.toLowerCase();

  console.log(cookies);

  if(normalizedcookies === 'no'){
    console.log('No kidding, something so easy and I over or under cook them every time!');
    alert( cookies + ' kidding it is very embarassing asking family and freinds to bake them for me!');

    correctcount++;
  } else {
    console.log('Please try again...');
    alert('Incorrect');
  }
}
askCookies();
//Question 5
function askDoggy(){
  let doggy = prompt ('Do you think I had a dog that was in the news paper and called a local hero?');

  let normalizeddoggy = doggy.toLowerCase();

  console.log(doggy);

  if(normalizeddoggy === 'yes'){
    console.log('I could not beleive it myself but it is true!');
    alert( doggy + ' he stopped and detained a home invader linked to 7 other home invasions, the police wanted to hire him!');

    correctcount++;
  } else {
    console.log('Please try again...');
    alert('Incorrect');
  }
}
askDoggy();
//Question 6

const statesvisited = 42;

const maxattempts = 4;

let attempts = 0;

function guessNumber() {
  if (attempts < maxattempts) {
    console.log( 'You have 4 attempts.' );
    const userguess = prompt(`How many states have I visited? You have ${maxattempts - attempts} attempt(s) left:`);
    const userguessnumber = parseInt(userguess);

    if (!isNaN(userguessnumber)) {
      attempts++;

      if (userguessnumber === statesvisited) {
        alert(`You guessed the correct number in ${attempts} attempt(s).`);
        correctcount++;
      } else if (userguessnumber < statesvisited) {
        console.log( 'Too low try higher.' );
        alert('Too low, try again.');
        guessNumber();
      } else {
        console.log( 'Too high try lower.' );
        alert('Too high, try again.');
        guessNumber();
      }
    } else {
      console.log( 'Not a valid number.' );
      alert('Please enter a number.');
      guessNumber();
    }
  } else {
    console.log( 'Used all attempts.' );
    alert(`You've used all your attempts. The correct number was ${statesvisited}.`);
  }
}

guessNumber();

//Question 7
function askColors(){
  const correctcolors = ['black', 'green', 'red', 'orange'];

  const maxtries = 6;

  let tries = 0;

  let correctanswer = false;

  while (tries < maxtries && !correctanswer) {
    console.log( 'You have 6 tries.' );
    const usercolor = prompt(`What is my favorite color? You have ${maxtries - tries} attempt(s) left:`);

    if (correctcolors.includes(usercolor.toLowerCase())) {
      console.log( 'Chose correct color.' );
      alert('That\'s one of the correct colors!');
      correctanswer = true;
      correctcount++;
    } else {
      console.log( 'Chose wrong color.' );
      alert('Sorry, that\'s not one of the correct colors.');
      tries++;
    }
  }

  if (!correctanswer) {
    console.log( 'No more tries left.' );
    alert(`You've used all your tries. The correct colors are: ${correctcolors(', ')}.`);
  }
}

askColors();

//Closing Question

alert('Wow ' + person + ` you got ${correctcount} correct out of 7 questions!`);

console.log(`Total correct answers: ${correctcount}`);
