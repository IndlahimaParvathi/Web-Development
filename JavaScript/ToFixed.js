function onClickFixCheck(){
    debugger;
    DecimalNumber=Number(document.getElementById("txtDecimalNumber").value)
    FixNumber=Number(document.getElementById("txtfixNumber").value)
    document.getElementById("pResult").innerHTML= DecimalNumber.toFixed(FixNumber)

    

}