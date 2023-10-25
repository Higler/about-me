'use strict';

let person = prompt('What is your name?');

alert('Its very nice to meet you ' + person);

console.log(person);

let years = prompt ('Do you think I have been writing code for 20 years?');

let normalizedyears = years.toLowerCase();

console.log(years);

if(normalizedyears === 'yes'){
  console.log('You are correct, but that makes me old!');
  alert('You are right, ' + years + ' that is a long time.');
  alert(`Yes, ${years} is correct`);
} else {
  console.log('Please try again...');
  alert('Incorrect');
}

let weird = prompt ('Would you beleive I can not only build a race car but also a video game?');

let normalizedweird = weird.toLowerCase();

console.log(weird);

if(normalizedweird === 'yes'){
  console.log('That is right, it is a unique combination!');
  alert('You are correct, ' + weird + ' it is not everyday you see that.');
  alert(`Yes, ${weird} is correct`);
} else {
  console.log('Please try again...');
  alert('Incorrect');
}

let plane = prompt ('Do you think I have launched air planes from the flight deck of a carrier?');

let normalizedplane = plane.toLowerCase();

console.log(plane);

if(normalizedplane === 'yes'){
  console.log('That is right, it is a unique combination!');
  alert('You are absolutely right, ' + plane + ' it was the biggest rush of my life everytime!');
  alert(`Yes, ${plane} is correct`);
} else {
  console.log('Please try again...');
  alert('Incorrect');
}

let cookies = prompt ('Do you think I can bake the premade cookies?');

let normalizedcookies = cookies.toLowerCase();

console.log(cookies);

if(normalizedcookies === 'no'){
  console.log('No kidding, something so easy and I over or under cook them every time!');
  alert( cookies + ' kidding it is very embarassing asking family and freinds to bake them for me!');
  alert(`Yes, ${cookies} is correct`);
} else {
  console.log('Please try again...');
  alert('Incorrect');
}

let doggy = prompt ('Do you think I had a dog that was in the news paper and called a local hero?');

let normalizeddoggy = doggy.toLowerCase();

console.log(doggy);

if(normalizeddoggy === 'yes'){
  console.log('I could not beleive it myself but it is true!');
  alert( doggy + ' he stopped and detained a home invader linked to 7 other home invasions, the police wanted to hire him!');
  alert(`Yes, ${doggy} is correct`);
} else {
  console.log('Please try again...');
  alert('Incorrect');
}

let number = prompt('How many did you get correct?');

alert( number +' Wow really thats awesome! Thank you for coming' + person);

console.log(number);
