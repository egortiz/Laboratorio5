    var getData=function fibonacci() {
    var n=document.getElementById("n")
	var a, b, c, i, n;
	
	document.write("SERIE GENERADA",'<BR/>');
	n = Number(prompt('Ingresar un numero?'));
	a = 0;
	b = 1;
	for (i=1;i<=n;i++) {
		document.write("***************SERIE FIBONACCI***********",'<BR/>');
		document.write(a,'<BR/>');
		c = a+b;
		a = b;
		b = c;
	}
	document.write("***************SERIE FIBONACCI***********",'<BR/>');
}

