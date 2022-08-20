// calculation

//=============================================================

document.getElementById("phonePlusBtn").addEventListener("click", function () {
  const totalPhone = updatePhne(true);
  updatePhoneTotalPrice(totalPhone);
  calculateSubtotal();
});

document
  .getElementById("phoneMainasBtn")
  .addEventListener("click", function () {
    const newPhoneNum = updatePhne(false);
    updatePhoneTotalPrice(newPhoneNum);
    calculateSubtotal();
  });

//============================ for bakc cover =================
function backCoverUpdate(isIncress) {
  const getBakcCover = document.getElementById("coverInputFild");
  const bakcCoverString = getBakcCover.value;
  const previusBackCover = parseInt(bakcCoverString);

  let newBackCover;
  if (isIncress === true) {
    newBackCover = previusBackCover + 1;
  } else {
    newBackCover = previusBackCover - 1;
  }
  getBakcCover.value = newBackCover;
  return newBackCover;
}

// calculation

function updateCoverTotalPrice(newinputValue) {
  const totalPhnPrice = newinputValue * 55;
  const phoneTotalEliment = document.getElementById("coverPrice");
  phoneTotalEliment.innerText = totalPhnPrice;

  const textEliment = document.getElementById("text");
  const totalEliment = document.getElementById("total");
}

document.getElementById("coverPlusBtn").addEventListener("click", function () {
  const updateCover = backCoverUpdate(true);
  updateCoverTotalPrice(updateCover);
  calculateSubtotal();
});

document
  .getElementById("coverMainasBtn")
  .addEventListener("click", function () {
    const updateCover = backCoverUpdate(false);
    updateCoverTotalPrice(updateCover);
    calculateSubtotal();
  });
