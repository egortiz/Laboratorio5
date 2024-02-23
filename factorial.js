    var getData=function factorial() {
    var A=document.getElementById("A")
	
	var i;
    var A = new Number();
    var fact = new Number();
    
	var procedimiento = new String();
    document.write("INGRESE UN NUMERO", '<BR/>');
    A = Number(prompt());
    while (A < 0) {
        document.write("INGRESE UN N�MERO ENTERO", '<BR/>');
        A = Number(prompt());
    }
    fact = 1;
    if (A == 0 || A == 1) {
        document.write("**********************FACTORIAL********************", '<BR/>');
        document.write(A, "=", 1, '<BR/>');
        document.write("***************************************************", '<BR/>');
    } else {
        for (i = 1; i <= A; i++) {
            fact = fact * i;
            if (i < A) {
                procedimiento = procedimiento + String(i) + "x";
            } else {
                procedimiento = procedimiento + String(i);
            }
        }
        document.write("****************************FACTORIAL************************", '<BR/>');
        document.write(A, "!=", procedimiento, "=", fact, '<BR/>');
        document.write("*************************************************************", '<BR/>');
    }
}