let currentOutput = "0";
let resultOutput = false;

function appendToOutput(value) {
  if (currentOutput === "0" || resultOutput) {
    currentOutput = value;
  } else {
    currentOutput += value;
  }

  resultOutput = false;

  updateOutput();
}

function updateOutput() {
  const outputElement = document.getElementById("output");
  outputElement.textContent = currentOutput;
}

function calculateOutput() {
  try {
    const output = eval(currentOutput);

    currentOutput = output.toString();

    updateOutput();
  } catch (error) {
    currentOutput += "\nError";

    updateOutput();
  }
  resultOutput = true;
}

function clearLastElement() {
  currentOutput = currentOutput.slice(0, -1);

  if (currentOutput === "") {
    currentOutput = "0";
  }
  updateOutput();
}

function clearOutput() {
  currentOutput = "0";
  resultOutput = false;

  updateOutput();
}
