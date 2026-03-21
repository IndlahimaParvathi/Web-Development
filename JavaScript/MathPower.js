function onClickPowerChecker(){
    debugger;
    var value=document.getElementById("txtvalue").value
    var power=document.getElementById("txtpower").value
    document.getElementById("result").innerHTML=Math.pow(value,power);
}