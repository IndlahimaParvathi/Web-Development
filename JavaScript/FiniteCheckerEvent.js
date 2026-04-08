document.getElementById("btnfinitechecker").addEventListener("click",function(){
 debugger;
    var inputValue=parseFloat(document.getElementById("txtinputvalue").value)
    divisionResult=1/inputValue;

    var result=isFinite(divisionResult);

    document.getElementById("result").innerHTML= "Finite/" + result;

});
    