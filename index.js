function add(a, b) {
  return a+b;
}

function subtract(a, b) {
  return a-b;
}

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  return a/b;
}

function inc(a) {
  return ++a;
}

function dec(a) {
  return --a;
}

function makeInt(a, "10") {
  if (a==a.toString()) {
    return a;
  } else {
    return "NaN";
  }
}
  
function perserveDecimal(a) {
  return parseFloat(a)
}  

