function onClickAdd(){
    debugger;
    var number= number(document.getElementById("txtNumber").value)
    if(number>0){
         document.getElementById("result").innerHTML="The number is Positive.";
    }
    else {
         document.getElementById("result").innerHTML="The number is Negative or zero"

    }

    
}