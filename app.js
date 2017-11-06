function c(x) {
    document.getElementById("input").value = x;
  }
  function m(x) {
    document.getElementById("input").value += x;
  }
  function e() {
    c(eval(document.getElementById("input").value));
  }