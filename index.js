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

let F = {};
let G = {};
let C = A;

function deepCheck(objOne, objTwo) {
  // * grab the keys array
  let objOneKeys = Object.keys(objOne);
  let objTwoKeys = Object.keys(objTwo);

  // * different key length means unequal contents
  if (objOneKeys.length !== objTwoKeys.length) return false;
  else {
    for (i of objOneKeys) {
      console.log(`index : ${i} , item : ${objOneKeys[i]}`);
    }
  }
}

let checkResult = deepCheck(A, B);
console.log(checkResult);
