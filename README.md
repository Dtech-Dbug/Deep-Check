# Deep-Check

Deep Check to compare contents of Objects as opposed to just Identity Checking. Feature add to JavaScript.

## Form

```js
deepCheckObjects(object1, object2);
return type : boolean
// true : if the contents are same and exact
// false : if not
```

**Check Usage section for more clarity.**

## Need?

- JavaScript compares identity for data structures and really has no out-of-the-box abstraction for deep checking data structures(in this case objects).

```js
let dev = {
  tool: "JavaScript",
};

let devTwo = {
  tool: "JavaScript",
};

console.log(dev === devTwo); // False
```

- While it makes sense why the result of comparison is false, beacuse essentially the two bindings are pointing at two different address values, although the values are same - **_they are not stored at the same memory address._**

- This shallow comparison is often useful in realizing whether the objects are stored at the same memory address, but they don't let us check if the contents encapsulated inside them are the same.

## deep-check pakage 📦

- This is an abstraction to very simply check whether the contents of objects are the same, skipping the tedious lines of codes.

### Installation and Setting-Up

1. Install using npm

` npm i deep-check`

2. Setting up

```js
// commonjs module
const deepCheckObjects = require("deep-check");

//es6 import syntax
import deepCheckObjects from "deep-check";
```

### Usage

```js
let test = {
  day: "Thursday",
  time: "1:18pm",
};

let test2 = {
  day: "Thursday",
  time: "1:18pm",
};

let test3 = {
  day: "Thursday",
  time: "1:23pm",
};

console.log(deepCheckObjects(test, test2)); // true

let checkResult = deepCheckObjects(test2, test3);
console.log(checkResult); // false
```

## Complaints? Feedbacks? Feature Requests?

- [Get in Touch](https://linkfolio-dee.netlify.app) 🧙‍♂️
- Or create an issue in the repo. 🏝
