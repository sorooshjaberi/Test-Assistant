//vars
let startNum = document.querySelector("#Qinp"),
  startNumBtn = document.querySelector("#QinpBtn"),
  currentQ = document.querySelector("#currentQ span"),
  qNum,
  increaseForm = Array.from(document.querySelectorAll("#increase input")),
  choices = Array.from(document.querySelectorAll(".choice")),
  choice,
  table=``;
//listeners
//when clicking on choices
choices.map((e) => {
  e.addEventListener("click", () => {
    //getting the answer
    choice = +e.innerHTML;
    if (currentQ.innerHTML == "شماره سوال") {
      currentQ.innerHTML = 1;
    }
    answering(choice);
  });
});
//start number Major
startNumBtn.addEventListener("click", (e) => {
  qNum = +startNum.value;
  currentQ.innerHTML = qNum;
});
//funcs
//which way of increase was selected
function increaseTrendFinder() {
  increaseForm.map((e) => {
    if (e.checked) return e;
  });
}
//going to next question after answering
function goNextAuto() {
  qNum++;
  currentQ.innerHTML = qNum;
}
function answering(answer) {
    table+=`
    <
    `
}
