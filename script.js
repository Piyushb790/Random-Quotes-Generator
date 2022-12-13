const text = document.getElementById("quote");
const btn = document.getElementById("btn");

let randomQuotes = [
  '"The greatest glory in living lies not in never falling, but in rising every time we fall"',
  '"The way to get started is to quit talking and begin doing"',
  '"Your time is limited, so dont waste it living someone else life. Dont be trapped by dogma – which is living with the results of other peoples thinking"',
  '"If life were predictable it would cease to be life, and be without flavor"',
  '"If you look at what you have in life, you will always have more. If you look at what you dont have in life, you will never have enough"',
  '"If you set your goals ridiculously high and it is a failure, you will fail above everyone else success"',
  '"Life is what happens when you are busy making other plans"',
  '"Spread love everywhere you go. Let no one ever come to you without leaving happier"',
  '"Always remember that you are absolutely unique. Just like everyone else"',
];

btn.addEventListener("click", () => {
  var random = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
  text.innerHTML = random;
});
