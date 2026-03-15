function onClickFixCheck(){
    debugger;
    DecimalNumber=Number(document.getElementById("txtDecimalNumber").value)
    FixNumber=Number(document.getElementById("txtFixNumber").value)
    document.getElementById("pResult").innerHTML= DecimalNumber.toFixed(FixNumber)

    

}