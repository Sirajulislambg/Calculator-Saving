function getInputValue(elementId) {
  const incomeField = document.getElementById(elementId);
  const incomeString = incomeField.value;
  const incomeValue = parseFloat(incomeString);
  return incomeValue;
}

function getInnerText(elementId, value) {
  const totalExpant = document.getElementById(elementId);
  //   const totalExpantValue = totalExpant.innerText;
  totalExpant.innerText = value;
}

function getInnerOneText(elementId){

      const savingAmount = document.getElementById(elementId);
      const savingFinal = savingAmount.innerText;
      return savingFinal;

}

document.getElementById("btn-calculate").addEventListener("click", function () {
  const incomeField = getInputValue("income-field");

  const foodfield = getInputValue("food-field");

  const rentField = getInputValue("rent-field");

  const clothField = getInputValue("clothe-field");

  const TotalExpance = foodfield + rentField + clothField;

  const totalExpant = getInnerText("total-expant", TotalExpance);

  const balance = incomeField - TotalExpance;

  const balancePart = getInnerText("total-balance", balance);

  // console.log(TotalExpance);
});

document.getElementById("save-btn").addEventListener("click", function () {
  const incomeField = getInputValue("income-field");
  // console.log(incomeField);
  // const incomeString = incomeField.value;
  // // console.log(incomeString);
  //  const incomeValue = parseFloat(incomeString);
  // console.log(incomeValue);

  const saveField = getInputValue("save-field");
  // const saveString=saveField.value;
  // const saveValue=parseFloat(saveString);

  const saveMoney = parseFloat(saveField / 100);

  const finalValue = incomeField * saveMoney;
  //  console.log(finalValue);

  const saveAmount = getInnerText("save-amount", finalValue);
  //  saveAmount.innerText=finalValue;

   const saveMoneyy = getInnerOneText("save-amount");
   

  const balanceAmount = getInnerOneText("total-balance");
  

  const remaining = balanceAmount - saveMoneyy;


  const remainingFinal = getInnerText("remaining-amount", remaining);

  
//   const pareValueBalance=parseFloat(savingFinal);

//   console.log(savingFinal);

//   const remaining = savingFinal - saveAmount;
//   console.log(remaining);

  //  const remaininggBalance = getInnerText("remaining-amount", remaining);
});
