const DOM_buttons = document.querySelectorAll(".buttons");
const DOM_text = document.querySelectorAll(".textos");

function Buttons(id) {
  if (
    window.getComputedStyle(DOM_text[id], null).getPropertyValue("display") ===
    "none"
  ) {
    DOM_buttons[id].src = "assets/images/icon-minus.svg";
    Animation(DOM_text[id], true);
  } else {
    DOM_buttons[id].src = "assets/images/icon-plus.svg";
    Animation(DOM_text[id], false);
  }
}

function Animation(Elemento, side) {
  let heightDown = 0;
  let heightUp = Elemento.scrollHeight;
  Elemento.style.height = "";
  if (side) {
    Elemento.style.height = "0px";
    Elemento.style.display = "block";
    let timer = setInterval(() => {
      if (heightDown < Elemento.scrollHeight) {
        Elemento.style.height = `${heightDown}px`;
        heightDown += 5;
      } else {
        Elemento.style.height = "";
        clearInterval(timer);
      }
    });
  } else {
    let timer = setInterval(() => {
      if (heightUp > 0) {
        Elemento.style.height = `${heightUp}px`;
        heightUp -= 5;
      } else {
        Elemento.style.height = "";
        Elemento.style.display = "none";
        clearInterval(timer);
      }
    }, 1);
  }
}
