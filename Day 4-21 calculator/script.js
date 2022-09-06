const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");



buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear")  {
      display.innerText = "";
    } else if(item.id == "ce"){
      display.innerText = "0";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    }else if(item.id=="sin"){
      sin();
    } else if(item.id=="cos"){
      cos();
    }else if(item.id=="tan"){
      tan();
    }else if(item.id=="sin"){
      sin();
    }else if(item.id=="square"){
      sqrt();
    }else if(item.id=="xy"){
      pow();
    } else if(item.id=="log"){
      log();
    }else if(item.id=="pi"){
      pi();
    }else if(item.id=="e"){
      e();
    }else if(item.id=="fact"){
      fact();
    }else {
      display.innerText += item.id;
    }
  };
});



const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;


document.querySelector('#checkbox').addEventListener('change', function() {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
})


function sin() {
  display.innerText = Math.sin(display.innerText);
}

function cos() {
  display.innerText = Math.cos(display.innerText);
}

function tan() {
  display.innerText = Math.tan(display.innerText);
}

function pow() {
  display.innerText = Math.pow(display.innerText, 2);
}

function sqrt() {
  display.innerText = Math.sqrt(display.innerText, 2);
}

function log() {
  display.innerText = Math.log(display.innerText);
}

function pi() {
  display.innerText = 3.14159265359;
}

function e() {
  display.innerText= 2.71828182846;
}

function fact() {
  var i, num, f;
  f = 1
  num = display.innerText;
  for (i = 1; i <= num; i++) {
      f = f * i;
  }

  i = i - 1;

  display.innerText = f;
}

