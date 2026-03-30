// function onClickAdd(){
//     debugger;
//     var number=Number(document.getElementById("txtNumber").value)
//     if(number%3== 0&& number%7==0){
//          document.getElementById("result").innerHTML="The number is divisible 3and 7";
//     }
//     else {
//          document.getElementById("result").innerHTML="The number is not divisible 3 and 7.";        
//     } 
// }

function onClickAdd(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value)
    if(number%3== 0&& number%7==0){
         document.getElementById("result").innerHTML="The number is divisible 3and 7";
    }
    else if(number%3== 0) {
         document.getElementById("result").innerHTML="The number is  divisible by 3 ";        
    } 
    else if (number%7==0) {
        document.getElementById("result").innerHTML="The number is divisible by 7.";        
    
    }
    else {
         document.getElementById("result").innerHTML="The number is not divisible by 3 and 7.";        
    
    }
}



