    var getData=function generarprimos() {
    var A=document.getElementById("A")
	var c, d, n, p;
	document.write("******************************************************",'<BR/>')
	document.write(        "GENERANDO NUMEROS PRIMOS",'<BR/>');
	document.write("******************************************************",'<BR/>')
	
	n = prompt('Introdusca un numero?');
	c = 1;
	p = 2;
	d = 2;
	while (c<=n) {
		if (p%d==0) {
			if (p==d) {
				document.write(p,'<BR/>');
				c = c+1;
			}
			d = 2;
			p = p+1;
		} else {
			d = d+1;
		}
	}
}

