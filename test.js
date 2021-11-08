//vars
let startNum = document.querySelector("#Qinp"),
  startNumBtn = document.querySelector("#QinpBtn"),
  currentQ = document.querySelector("#currentNumber"),
  qNum = 1,
  increaseForm = Array.from(document.querySelectorAll("#increase input")),
  choices = Array.from(document.querySelectorAll(".choice")),
  choice = 0,
  table = document.querySelector("tbody"),
  minute = document.querySelectorAll(".inputs input")[0],
  second = document.querySelectorAll(".inputs input")[1],
  inputs = document.querySelector(".inputs"),
  start = document.querySelector(".start"),
  setNew = document.querySelector(".setNew");
console.log(minute, second);
//listeners

//when clicking on choices
choices.map((e) => {
  e.addEventListener("click", () => {
    //getting the answer
    choice = +e.innerHTML;
    //if current q is not defined
    if (currentQ.innerHTML == "--") {
      currentQ.innerHTML = 1;
    }
    //going next
    answering(choice);
    goNextAuto();
  });
});
//start number part
startNumBtn.addEventListener("click", (e) => {
  qNum = +startNum.value;
  currentQ.innerHTML = qNum;
});
//timer set:
//funcs
//which way of increase was selected
function increaseTrendFinder() {
  let res;
  increaseForm.map((e) => {
    if (e.checked) {
      res = +e.value;
    }
  });
  return res;
}
console.log(increaseTrendFinder());
//going to next question after answering
function goNextAuto() {
  qNum = qNum + increaseTrendFinder();
  currentQ.innerHTML = qNum;
}
function answering(answer) {
  table.innerHTML += `
   <tr>
   <td>${qNum}</td>
   <td>${choice}</td>
   </tr>
   `;
}
function timer() {
  start.addEventListener("click", (e) => {
    //if is not valued
    if (+minute.value == 0) minute.value = 0;

    //if is not valued
    if (+second.value == 0) second.value = 0;
    e.target.disabled = true;
    timeDown(timeConcat(), e);
  });
}
function timeConcat() {
  let total = 0;
  total += +minute.value * 60 + +second.value;
  return total;
}
timer();
function timeDown(time, btn) {
  //counting down the time
  let temp = time,
    html = ``;
  setNew.disabled = false;
  let inter = setInterval(() => {
    html = `
    <span id='timerS'>${temp}</span>
    `;
    inputs.innerHTML = html;
    temp--;
    if (temp < 0) {
      clearInterval(inter);
      inputs.innerHTML = ` <input type="number" id="minute" placeholder="دقیقه"/>
      <span style="font-size: xxx-large;">:</span>
      <input type="number" id="second" placeholder="ثانیه" />`;
      btn.target.disabled = false;
    }
    console.log(temp);
  }, 1000);
  setNewer(inter);
}
//set again:
function setNewer(interval) {
  setNew.addEventListener("click", () => {
    clearInterval(interval);
    inputs.innerHTML = ` <input type="number" id="minute" placeholder="دقیقه"/>
      <span style="font-size: xxx-large;">:</span>
      <input type="number" id="second" placeholder="ثانیه" />`;
      setNew.disabled = true;
      start.disabled = false;
  });
}
