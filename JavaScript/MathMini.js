function onClickDigits() {
    debugger;
    var value1 = math.random() * math.power(10, "txtDigits");
    var value2 = math.random() * math.power(10, "txtDigits");
    var value3 = math.random() * math.power(10, "txtDigits");
    var value4 = math.random() * math.power(10, "txtDigits");
    var value5 = math.random() * math.power(10, "txtDigits");
    var minDigits=math.min(value1,value2,value3,value4,value5);
    document.getElementById("pResult").innerHTML= varminDigits
}

