let geoffHobbies = ["Fishing", "Croquet"];
let nancyHobbies = ["Tennis", "Trading"];
let malcolmHobbies = ["Chess", "Shopping"];
let dudleyHobbies = ["Skating", "Reading"];
let mimiHobbies = ["Tattooing", "Art"];

let idToHobbyListMap = [
  { id: "geoffHobbies", hobbyList: geoffHobbies },
  { id: "nancyHobbies", hobbyList: nancyHobbies },
  { id: "malcolmHobbies", hobbyList: malcolmHobbies },
  { id: "dudleyHobbies", hobbyList: dudleyHobbies },
  { id: "mimiHobbies", hobbyList: mimiHobbies },
]

function resetHobbies(idToReset, arrOfHobbies) {
  let htmlHobbies = "";
  arrOfHobbies.forEach((hob) => {
    htmlHobbies += '<div>'+ hob + '</div>';
  });
  document.getElementById(idToReset).innerHTML = htmlHobbies;
}

idToHobbyListMap.forEach(map => resetHobbies(map.id, map.hobbyList))