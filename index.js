function deepCheckObjects(objOne, objTwo) {
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
      for (i in objOneKeys) {
        let valueSetOne = objOne[objOneKeys[i]];
        let valueSetTwo = objTwo[objTwoKeys[i]];

        // * check if keys are same and their values
        if (objOneKeys[i] === objTwoKeys[i] && valueSetOne === valueSetTwo) {
          result = true;
        } else {
          // * if keys are not same return false
          result = false;
        }
      }

      return result;
    }
  }
}

module.exports = deepCheckObjects;
