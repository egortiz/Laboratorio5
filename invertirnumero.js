    var getData=function inversioncifras() {
    var A=document.getElementById("A")

	var a = new Number();
	var retorno = new Number();
	var digito = new Number();

	a = Number(prompt('Ingrese el numero a invertir'));
	retorno = 0;
	if (a==0) {
		document.write("********************CIFRA IGUAL A CERO***********************",'<BR/>');
		document.write("  C I F R A    I N V E R T I D A     : 0 ",'<BR/>');
		document.write("*************************************************************",'<BR/>');
	}
	if (a<10) {
		document.write("********************CIFRA DEL MISMO NUMERO*******************",'<BR/>');
		document.write("  C I F R A    I N V E R T I D A    : " , a ,'<BR/>');
		document.write("*************************************************************",'<BR/>');
	}
	while (a>0) {
		digito = a%10;
		a = a-digito;
		a = a/10;
		retorno = retorno*10+digito;
	}
	document.write("********************CIFRA INVERTIDA******************************",'<BR/>');
	document.write("  C I F R A    I N V E R T I D A      :  ", retorno ,'<BR/>');
	document.write("*****************************************************************",'<BR/>');
}

