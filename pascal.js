    var getData=function pascal() {
    var n=document.getElementById("n") 
	var aux, c, f1, f2, f3, i, j, n, tern;
	document.write('Matriz de Pascal','<BR/>');
	alert('Desea Calcular la Matriz?');
	n = Number(prompt('Ingrese un numero para su Matriz de Pascal'));
	for (i=0;i<=n;i++) {
		for (aux=0;aux<=n-i;aux++) {
			document.write("  ");
		}
		for (j=0;j<=i;j++) {
			f1 = 1;
			f2 = 1;
			f3 = 1;
			for (c=1;c<=i;c++) {
				f1 = f1*c;
			}
			for (c=1;c<=j;c++) {
				f2 = f2*c;
			}
			if (i!=j) {
				for (c=1;c<=i-j;c++) {
					f3 = f3*c;
				}
			}
			tern = f1/(f2*f3);
			document.write(tern,"   ");
		}
		document.write("  ",'<BR/>');
	}
}

