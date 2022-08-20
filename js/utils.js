function updatePhne(isIncress) {
  const getNumberInput = document.getElementById("phnIcNumberFild");
  const inputValueString = getNumberInput.value;
  const previusInputValue = parseInt(inputValueString);
  let newinputValue;
  if (isIncress === true) {
    newinputValue = previusInputValue + 1;
  } else {
    newinputValue = previusInputValue - 1;
  }
  getNumberInput.value = newinputValue;
  return newinputValue;
}

function updatePhoneTotalPrice(newinputValue) {
  const totalPhnPrice = newinputValue * 1219;
  const phoneTotalEliment = document.getElementById("phonePrice");
  phoneTotalEliment.innerText = totalPhnPrice;
}

//**************** calculateSubtotal ********************* */

/**********
 *  total calculation
 ********** */

function getextElimentTotal(elimentId) {
  const curentEliment = document.getElementById(elimentId);
  const curentElimentString = curentEliment.innerText;
  const cureentTotalPrice = parseFloat(curentElimentString);
  return cureentTotalPrice;
}

function setTextElimentValueById(elimentId, value) {
  const subTotalEliment = document.getElementById(elimentId);
  subTotalEliment.innerText = value;
}

function calculateSubtotal() {
  const currentPhoneTotal = getextElimentTotal("phonePrice");
  const currentCoverTotal = getextElimentTotal("coverPrice");
  const cuurentSubtotal = currentPhoneTotal + currentCoverTotal;
  setTextElimentValueById("subtotal", cuurentSubtotal);
  // calcualte text
  const textAmountString = (cuurentSubtotal * 0.1).toFixed(2);
  const textAmount = parseFloat(textAmountString);
  setTextElimentValueById("text", textAmount);

  const finalAmount = cuurentSubtotal + textAmount;
  setTextElimentValueById("total", finalAmount);
}
