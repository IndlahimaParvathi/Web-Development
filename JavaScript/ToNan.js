function onClickNaNChecker(){
    debugger;
   var  notANumber=document.getElementById("txtnotANumber").value
    document.getElementById("pResult").innerHTML= notANumber.isnan(notANumber);  

    

}