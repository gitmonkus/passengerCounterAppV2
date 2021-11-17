let counting = 0;
let countArray = [];
const countEl = document.getElementById("count-el");
const incrementEl = document.getElementById("increment-btn");
const saveEl = document.getElementById("save-btn");
const resetEl = document.getElementById("reset-btn");
const savednumberEl = document.getElementById("saved-number");
const countFromLocalStorage = JSON.parse(localStorage.getItem("count"));

incrementEl.addEventListener("click", function () {
  countEl.textContent = counting += 1;
});

saveEl.addEventListener("click", function () {
  countArray.push(counting);
  localStorage.setItem("count", JSON.stringify(countArray));
  savednumberEl.textContent += ` ${counting} `;
  countEl.textContent = counting = 0;
});

resetEl.addEventListener("click", function () {
  savednumberEl.textContent = "Saved number(s):  ";
  countEl.textContent = counting = 0;
  localStorage.clear();
  countArray = [];
});

if (countFromLocalStorage) {
  countArray = countFromLocalStorage;
  render(countArray);
}

function render(counts) {
  for (let count in counts) {
    savednumberEl.textContent += ` ${counts[count]} `;
  }
}
