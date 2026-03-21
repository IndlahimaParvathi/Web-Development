function onClickFiniteChecker(){
    debugger;
    var inputValue=parseFloat(document.getElementById("txtinputvalue").value)
    divisionResult=1/inputValue;

    var result=isFinite(divisionResult);

    document.getElementById("Result").innerHTML= "Finite/" + result;
}