
function onClickPrecisionCheck(){
    debugger;
    DecimalNumber=Number(document.getElementById("txtDecimalNumber").value)
    PrecisionNumber=Number(document.getElementById("txtPrecisionNumber").value)
  
      document.getElementById("pResult").innerHTML= DecimalNumber.toPrecision(PrecisionNumber)
}
