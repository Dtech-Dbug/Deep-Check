const deepCheckObjects = require("./index");

let today = {
  day: "Thursday",
};

let tonight = {
  day: "Thursday",
};

let tomorrow = {
  day: "Friday",
};

let whatever = new Object();
let duh = {};

test("Should objects be equal", () => {
  expect(deepCheckObjects(today, tomorrow)).toBe(false);
});

test("Should objects be equal", () => {
  expect(deepCheckObjects(today, tonight)).toBe(true);
});

test("Should objects be equal", () => {
  expect(deepCheckObjects(today, whatever)).toBe(false);
});

test("should empty objects be equal", () => {
  expect(deepCheckObjects(whatever, duh)).toBe(false);
});
