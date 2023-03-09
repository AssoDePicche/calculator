import Calculator from "./module/Calculator.js";
import FixedArray from "./module/FixedArray.js";

const screen = document.querySelector(".screen");

const buttons = document.querySelectorAll(".button");

const entries = new FixedArray(2);

var currentEntry = '';

var operation = '';

var lastResult = null;

buttons.forEach(button => button.addEventListener("click", () => {
  const entry = button.innerHTML;

  switch (entry) {
    case "c":
      entries.clear();

      clearScreen();

      operation = '';

      lastResult = null;
      break;

    case "/":
    case "x":
    case "-":
    case "+":
    case "%":
      entries.push(currentEntry);

      operation = entry;

      clearScreen();

      if (lastResult !== null) {
        entries.clear();

        entries.shift();

        entries.push(String(lastResult));
      }
      break;

    case "=":
      entries.push(currentEntry);

      const calculator = new Calculator(entries);

      const operations = {
        "+": calculator.sum(),
        "-": calculator.subtract(),
        "x": calculator.multiply(),
        "/": calculator.divide(),
        "%": calculator.modulo()
      };

      currentEntry = '';

      const output = operations[operation];

      lastResult = output;

      screen.innerHTML = output;
      break;

    case "\u2190":
      currentEntry = currentEntry.slice(0, currentEntry.length - 1);

      screen.innerHTML = currentEntry.length === 0 ? 0 : currentEntry;
      break;

    default:
      currentEntry += entry;

      screen.innerHTML = currentEntry;
  }
}));

function clearScreen() {
  currentEntry = '';

  screen.innerHTML = 0;
}
