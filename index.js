let currentDisplay;

function getNum(a) {
  let currentNum = document.getElementById(a).value;

  if (document.getElementById("input-num").value == 0) {
    document.getElementById("input-num").value = currentNum;
  } else {
    currentDisplay = document.getElementById("input-num").value += currentNum;
  }
  console.log(document.getElementById(a).value);
}

function reset() {
  document.getElementById("input-num").value = "0";
}

function operator(op) {
  switch (op) {
    case "mod":
      document.getElementById("input-num").value += " % ";
      break;
    case "div":
      document.getElementById("input-num").value += " / ";
      break;
    case "mul":
      document.getElementById("input-num").value += " * ";
      break;
    case "sub":
      document.getElementById("input-num").value += " - ";
      break;
    case "add":
      document.getElementById("input-num").value += " + ";
      break;
    case "dot":
      document.getElementById("input-num").value += ".";
      break;
    // case "parenLeft":
    //   document.getElementById("input-num").value += "(";
    //   break;
    // case "parenRight":
    //   document.getElementById("input-num").value += ")";
    //   break;
  }
}

function result() {
  // console.log("AAAAAAAAAAAAAA");
  let finalResult = eval(currentDisplay);
  if (eval(currentDisplay) === undefined || eval(currentDisplay) === NaN) {
    document.getElementById("input-num").value = "ERR";
  } else {
    document.getElementById("input-num").value = finalResult;
  }
  console.log(finalResult);
  console.log(eval(currentDisplay));
}
