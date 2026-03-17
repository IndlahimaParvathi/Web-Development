function onClickNaNChecker(){
    debugger;
    Number=Number(document.getElementById("txtDecimalNumber").value)
    NaN=Number(document.getElementById("txtNotaNumber").value)
    document.getElementById("pResult").innerHTML= DecimalNumber.toNaN(NaN);  

    

}