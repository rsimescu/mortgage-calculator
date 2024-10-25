let mortgageAmount = document.querySelector("#mortgageAmount");
let mortgageAmountInput = document.querySelector(".mortgageAmountInput");
let pounds = document.querySelector("#pounds");
let mortgageTermInput = document.querySelector(".mortgageTermInput");
let mortgageTerm = document.querySelector("#mortgageTerm");
let years = document.querySelector("#years");
let interestRateInput = document.querySelector(".interestRateInput");
let interestRate = document.querySelector("#interestRate");
let percent = document.querySelector("#percent");
let repayment = document.querySelector("#repayment");
let repaymentSelector = document.querySelector(".repaymentSelector");
let interest = document.querySelector("#interest");
let interestSelector = document.querySelector(".interestSelector");
let button = document.querySelector("#button");
let rightContainer = document.querySelector(".rightContainer");
let rightContainerAfter = document.querySelector(".rightContainerAfter");
let clearAll = document.querySelector("#clearAll");

mortgageAmount.addEventListener("focus", () => {
  mortgageAmountInput.classList.add("borderColor");
  pounds.classList.add("backgroundColor");
});

mortgageAmount.addEventListener("focusout", () => {
  mortgageAmountInput.classList.remove("borderColor");
  pounds.classList.remove("backgroundColor");
});

mortgageTerm.addEventListener("focus", () => {
  mortgageTermInput.classList.add("borderColor");
  years.classList.add("backgroundColor");
});

mortgageTerm.addEventListener("focusout", () => {
  mortgageTermInput.classList.remove("borderColor");
  years.classList.remove("backgroundColor");
});

interestRate.addEventListener("focus", () => {
  interestRateInput.classList.add("borderColor");
  percent.classList.add("backgroundColor");
});

interestRate.addEventListener("focusout", () => {
  interestRateInput.classList.remove("borderColor");
  percent.classList.remove("backgroundColor");
});

repaymentSelector.addEventListener("click", () => {
  repaymentSelector.classList.add("borderColor");
  repaymentSelector.classList.add("selectorBackground");
  repayment.classList.add("borderColor")
  repayment.checked = true;
  interestSelector.classList.remove("borderColor");
  interestSelector.classList.remove("selectorBackground");
  interest.checked = false;
});

interestSelector.addEventListener("click", () => {
  interestSelector.classList.add("borderColor");
  interestSelector.classList.add("selectorBackground");
  interest.checked = true;
  repaymentSelector.classList.remove("borderColor");
  repaymentSelector.classList.remove("selectorBackground");
  repayment.checked = false;
});

document.querySelector("button").addEventListener("click", function () {
  const loanAmount = parseFloat(
    document.getElementById("mortgageAmount").value
  );
  const interestRate =
    parseFloat(document.getElementById("interestRate").value) / 100 / 12;
  const loanTerm =
    parseFloat(document.getElementById("mortgageTerm").value) * 12;

  if (
    isNaN(loanAmount) ||
    isNaN(interestRate) ||
    isNaN(loanTerm) ||
    loanAmount <= 0 ||
    interestRate < 0 ||
    loanTerm <= 0
  ) {
    alert("Te rog să introduci valori valide.");
    return;
  }

  if (
    isNaN(loanAmount) ||
    isNaN(interestRate) ||
    isNaN(loanTerm) ||
    loanAmount <= 0 ||
    interestRate < 0 ||
    loanTerm <= 0 ||
    document.getElementById("repayment").checked === false ||
    document.getElementById("interest").checked === false
  ) {
    rightContainer.classList.add("invisible");
    rightContainerAfter.classList.remove("invisible");
  }

  let monthlyPayment;
  if (document.getElementById("repayment").checked) {
    monthlyPayment =
      (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) /
      (Math.pow(1 + interestRate, loanTerm) - 1);
  } else if (document.getElementById("interest").checked) {
    monthlyPayment = loanAmount * interestRate;
  } else {
    alert("Te rog să selectezi tipul de ipotecă.");
    return;
  }

  document.getElementById("topResult").innerHTML =
    "$" + monthlyPayment.toFixed(2);

  let totalRepayment;
  if (document.getElementById("repayment").checked) {
    totalRepayment = monthlyPayment * loanTerm;
  } else if (document.getElementById("interest").checked) {
    totalRepayment = loanAmount + monthlyPayment * loanTerm;
  }

  document.getElementById("bottomResult").innerHTML =
    "$" + totalRepayment.toFixed(2);
});

clearAll.addEventListener("click" , () =>{
  repaymentSelector.classList.remove("borderColor");
  repaymentSelector.classList.remove("selectorBackground");
  repayment.classList.remove("borderColor")
  repayment.checked = false;
  interestSelector.classList.remove("borderColor");
  interestSelector.classList.remove("selectorBackground");
  interest.checked = false;
  document.getElementById("topResult").innerHTML = "$0.00"
  document.getElementById("bottomResult").innerHTML = "$0.00"
  mortgageAmount.value = "";
  mortgageTerm.value = "";
  interestRate.value = "";
})