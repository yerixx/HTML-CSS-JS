const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const ul = document.querySelector("ul");

const delItem = (e) => {
  if (e.target.tagName === "BUTTON") {
    const target = e.target.parentElement;
    target.remove();
  }
};

const addTexts = (text) => {
  if (text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = text;

    button.innerText = "지우기";
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
  }
};

const ilchon = (e) => {
  e.preventDefault();

  const ilchonText = input.value;
  input.value = "";
  console.log(ilchonText);

  if (ilchonText !== "") {
    addTexts(ilchonText);
  }
};

form.addEventListener("submit", ilchon);
