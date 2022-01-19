const playerName = "CHU";
const playerPoints = 121212;
const playerPretty = false;
const playerFat = "little bit";

const playerArr = ["CHU", 121212, false, "little bit"]; //player[0]=name...

const player = {
  name: "CHU",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

console.log(player);
player.points = player.points + 22; //수정
player.lastName = "LOLA"; //추가
console.log(player);
