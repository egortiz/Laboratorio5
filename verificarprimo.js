    var getData=function verificar_primo() {
	var num=document.getElementById("num")

	var num = new Number();
	var i = new Number();
	var cont = new Number();
	cont = 0;
	num = Number(prompt("Ingrese un numero a Verificar?"));
	if (num<=1) {
		alert("----->NO ES PRIMO<-----",'<BR/>');
	} else {
		for (i=1;i<=num;i++) {
			if (num%i==0) {
				cont = cont+1;
			}
		}
		if (cont==2) {
			alert("----->Numero Primo<-----",'<BR/>');
		} else {
			alert("----->No es Primo<-----",'<BR/>');
		}
	}
}


