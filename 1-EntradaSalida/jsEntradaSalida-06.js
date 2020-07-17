/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var SumaResultado;

	numeroUno=txtIdNumeroUno.value;
	numeroDos= txtIdNumeroDos.value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	SumaResultado=numeroUno+numeroDos;

	alert("El resultado es " + SumaResultado);

	
	/* Tambien funcionaria de la siguiente manera: ...
	PEEERO siempre es conveniente separar todo en problemas pequeños,
	para no dar lugar a errores. 

	var numeroUno;
	var numeroDos;

	numeroUno= txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);

	numeroDos= txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	alert("La suma es " + (numeroUno + numeroDos));
}
