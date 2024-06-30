let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        display.innerText = "0";
        break;
      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        display.innerText = display.innerText.replace("X", "*");
        display.innerText = eval(display.innerText);
        break;
      default:
        if (display.innerText.charAt(0) == "0") {
          display.innerText = display.innerText.substring(1);
        }
        display.innerText += e.target.innerText;
    }
  });
});
