// function onClickNaNChecker(){
//     debugger;
//    var  notANumber=document.getElementById("txtnotANumber").value
//     document.getElementById("pResult").innerHTML=isNaN(notANumber);  
// }


function onClickNanChecker(){
    debugger;
    var firstValue=document.getElementById("txtfirstvalue").value
    var secondValue=document.getElementById("txtsecondvalue").value
    var firstValueisNAN= isNaN(firstValue);
     var secondValueisNAN= isNaN(secondValue);
     console.log(firstValueisNAN);
     console.log(secondValueisNAN);
     if(!firstValueisNAN && !secondValueisNAN){
       document.getElementById("pResult").innerHTML=parseInt(firstValue)+parseInt(secondValue);

     }

        else{
            document.getElementById("pResult").innerHTML=firstValue+" "+secondValue;
        }

    
}