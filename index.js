let A = {
  day: "Thursday",
  event: "Diwali",
};

let B = {
  day: "Firiday",
  event: "Bhaifota",
};

let D = {
  day: "Thursday",
  event: "Diwali",
};

let E = {
  time: "9pm",
};
let C = A;

function deepCheck(objOne, objTwo) {
  // * grab the keys array
  let objOneKeys = Object.keys(objOne);
  let objTwoKeys = Object.keys(objTwo);

  // * different key length means unequal contents
  if (objOneKeys.length !== objTwoKeys) return false;
}

let checkResult = deepCheck(A, E);
console.log(checkResult);
