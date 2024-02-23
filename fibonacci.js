    var getData=function fibonacci() {
    var n=document.getElementById("n")

	var a, b, c, i, n;
	document.write("----->SERIE GENERADA<-----",'<BR/>');
	n = Number(prompt('Cantidad de terminos a generar?'));
	a = 0;
	b = 1;
	for (i=1;i<=n;i++) {
		document.write( a , " , " );
		c = a+b;
		a = b;
		b = c;
	}
	
}

