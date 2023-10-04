const btn = document.querySelector(".button");
const input = document.querySelector(".input");


function reverseNumber(num) {
  let rev = 0;
  while (num != 0) {
    let lastnum = num % 10;
    rev = rev * 10 + lastnum;
    num = Math.floor(num / 10);
  }
  return rev
}
function alertBox() {
  alert("enter some value");
}

btn.addEventListener("click", () => {
  if (input.value == 0) {
    alertBox();
  }
  else {
    let text = document.createElement("h3");
    text.innerHTML = "Reverse :";
    let output = document.createElement("p");
    output.innerHTML = reverseNumber(input.value);
    document.querySelector(".result").appendChild(text);
    document.querySelector(".result").appendChild(output);
    console.log(reverseNumber(input.value));
  }
})