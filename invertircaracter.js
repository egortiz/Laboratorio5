
   var getData=function cadenainvertida() {
    var caract=document.getElementById("caract")

	var cantidad, caract, caract2, i, k;
	caract = "";
	caract2 = "";
	k = 0;
	caract = prompt();
	cantidad = caract.length;
	for (i=1;i<=cantidad;i++) {
		caract2 = caract2+Array.substring(caract,cantidad-k-1,cantidad-k);
		k = k+1;
	}
	document.write(caract2,'<BR/>');
}