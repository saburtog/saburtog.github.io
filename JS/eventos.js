function sumar() {

    // declaramos variables y las cargamos con valores
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value

    suma = parseInt(num1)+parseInt(num2)

    res = document.getElementById("resultado")
    res.value = suma
}
  
$(document).ready(function(){
    $("#sumar").click(
        function(){
            var num1 = parseInt($("#num1").val());
            var num2 = parseInt($("#num2").val());
            var suma = num1+num2
            
            $("#resultado").val(suma)
            $("#sumar").hide(5000)
            $("#sumar").show(5000);
        }
    );
}
);
