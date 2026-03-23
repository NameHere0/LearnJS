const btn = document.getElementById("btn");
const txt = document.getElementById("txt");

btn.addEventListener("click", () => {
  if (txt.textContent == "hello there") txt.textContent = "HELP ME GODDAMNIT";
  else txt.textContent = "hello there";
});
