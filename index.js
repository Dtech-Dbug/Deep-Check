let A = {
  day: "Thursday",
  event: "Diwali",
};

let B = {
  day: "Thursday",
  event: "Bhaifota",
};

let D = {
  day: "Thursday",
  event: "Diwali",
};

let E = {
  time: "9pm",
};

let C = {
  day: "friday",
  time: "9pm",
};

function deepCheck(objOne, objTwo) {
  // * grab the keys array
  let objOneKeys = Object.keys(objOne);
  let objTwoKeys = Object.keys(objTwo);
  let proceed;
  let result;

  // * different key length means unequal contents
  if (objOneKeys.length !== objTwoKeys.length) return false;
  // * else keys length are same
  else {
    if (objOneKeys.length === objTwoKeys.length) {
      console.log("length same");

      for (i in objOneKeys) {
        // * check if keys are same
        if (objOneKeys[i] === objTwoKeys[i]) {
          proceed = true;
        } else {
          proceed = false;
          return proceed;
        }
      }
      if (proceed) {
        console.log("proceeding to next step check vals");
      }
    }
  }
}

let checkResult = deepCheck(A, C);
console.log(checkResult);
