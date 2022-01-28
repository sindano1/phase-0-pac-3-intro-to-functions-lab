function shout(string) {
return string.toUpperCase()
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
console.log(string.toUpperCase())
}
logShout("hello")

function logWhisper(string) {
    console.log(string.toLowerCase())
    }
    logWhisper("HELLO")


function sayHiToHeadphonedRoommate(string) {
switch (string) {
  case "hello":
    return "I can\'t hear you!";
    break;
  case "HELLO":
  return "YES INDEED!";
    break;
  case "Let\'s have dinner together!":
    return "I would love to!";
    break;
}}