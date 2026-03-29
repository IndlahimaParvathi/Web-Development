function onClickAdd(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value)
    if(number%3== 0&& number%7==0){
         document.getElementById("result").innerHTML="The number is divisible 3.";
    }
    else {
         document.getElementById("result").innerHTML="The number is divisible 7.";

    }

    
}


