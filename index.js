let vectorTest = [];
let aux;
let changed;
let counter;
let min;
let stopWhile;
let foundMin;

// BubbleSort 1
vectorTest[0] = 33;
vectorTest[1] = 44;
vectorTest[2] = 2;
vectorTest[3] = 333;
vectorTest[4] = 7;
for (let i = 0; i < vectorTest.length; i++) {
  for (let j = 0; j < vectorTest.length; j++) {
    if (vectorTest[j] > vectorTest[i]) {
      aux = vectorTest[j];
      vectorTest[j] = vectorTest[i];
      vectorTest[i] = aux;
    }
  }
}

console.log(vectorTest);

// BubbleSort 2
vectorTest[0] = 33;
vectorTest[1] = 44;
vectorTest[2] = 2;
vectorTest[3] = 333;
vectorTest[4] = 7;
changed = false;
stopWhile = false;
while (stopWhile === false) {
  changed = false;
  for (let j = 0; j < vectorTest.length - 1; j++) {
    if (vectorTest[j] > vectorTest[j + 1]) {
      aux = vectorTest[j];
      vectorTest[j] = vectorTest[j + 1];
      vectorTest[j + 1] = aux;
      changed = true;
    }
  }
  if (!changed) {
    stopWhile = true;
  }
}

console.log(vectorTest);

// BubbleSort 3
vectorTest[0] = 33;
vectorTest[1] = 44;
vectorTest[2] = 2;
vectorTest[3] = 333;
vectorTest[4] = 7;
changed = true;
while (changed) {
  changed = false;
  for (let j = 0; j < vectorTest.length - 1; j++) {
    if (vectorTest[j] > vectorTest[j + 1]) {
      aux = vectorTest[j];
      vectorTest[j] = vectorTest[j + 1];
      vectorTest[j + 1] = aux;
      changed = true;
    }
  }
}

console.log(vectorTest);

// Finding minimun
counter = 0;
min = 0;
stopWhile = false;
foundMin = false;
vectorTest[0] = 33;
vectorTest[1] = 44;
vectorTest[2] = 2;
vectorTest[3] = 333;
vectorTest[4] = 7;
while (stopWhile === false) {
  for (let j = 0; j < vectorTest.length; j++) {
    if (foundMin === false) {
      if (vectorTest[counter] < vectorTest[j]) {
        min = min + 1;
      }
      if (min === vectorTest.length - 1) {
        aux = vectorTest[0];
        vectorTest[0] = vectorTest[counter];
        vectorTest[counter] = aux;
        foundMin = true;
        stopWhile = true;
      }
    }
  }
  min = 0;
  counter = counter + 1;
}
console.log(vectorTest[0], "Minimum");

// Finding Maximun
vectorTest[0] = 33;
vectorTest[1] = 44;
vectorTest[2] = 2;
vectorTest[3] = 333;
vectorTest[4] = 5;
counter = 0;
let max = 0;
stopWhile = false;
let foundMax = false;
while (stopWhile === false) {
  for (let j = 0; j < vectorTest.length; j++) {
    if (foundMax === false) {
      if (vectorTest[counter] > vectorTest[j]) {
        max = max + 1;
      }
      if (max === vectorTest.length - 1) {
        aux = vectorTest[0];
        vectorTest[0] = vectorTest[counter];
        vectorTest[counter] = aux;
        foundMax = true;
        stopWhile = true;
      }
    }
  }
  max = 0;
  counter = counter + 1;
}
console.log(vectorTest[0], "Maximum");
