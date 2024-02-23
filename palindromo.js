    var getData=function palindromo() {
	var palabra =document.getElementById("palabra")

	var a = new Number();
	var b = new Number();
	var x = new Number();
	var palabra = new String();
	alert("¿Desea Verificar?",'<BR/>');
	palabra = prompt("Ingrese Expresion");
	a = 1;
	b = palabra.length;
	document.write(" NÚMERO DE CARACTERES: ",b,'<BR/>');
	x = 0;
	while (a<b) {
		if (String.substring(palabra,a-1,a)!=String.substring(palabra,b-1,b)) {
			x = x+1;
		}
		a = a+1;
		b = b-1;
	}
	if (x==0) {
		document.write("************************PALABRA PALINDROMO***********************",'<BR/>');
		document.write(" LA PALABRA --------> ",palabra," <-------- ES PALINDROMO ",'<BR/>');
		document.write("*****************************************************************",'<BR/>');
	} else {
		document.write("**********************PALABRA NO PALINDROMO**********************",'<BR/>');
		document.write(" LA PALABRA --------> ",palabra," <-------- NO ES PALINDROMO ",'<BR/>');
		document.write("*****************************************************************",'<BR/>');
	}
	
}
