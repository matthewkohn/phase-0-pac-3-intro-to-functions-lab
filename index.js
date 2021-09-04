function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}
console.log(whisper("OUCH!"));

function logShout(string) {
  console.log(string.toUpperCase());
}
logShout("Are You Happy?");

function logWhisper(string) {
  console.log(string.toLowerCase());
}
logWhisper("CAN You Hear MEEE?");

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  } else {
    return;
  }
}
console.log(sayHiToGrandma("How are you today?"));
console.log(sayHiToGrandma("you look so pretty"));
console.log(sayHiToGrandma("I NEED TO BORROW MONEY"));
console.log(sayHiToGrandma("I love you, Grandma."));