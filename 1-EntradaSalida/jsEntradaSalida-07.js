/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/



// var numeroUno;
// var numeroDos;
// var resultado;

// numeroUno=txtIdNumeroUno.value;
// numeroDos=txtIdNumeroDos.value;

// numeroUno=parseInt(numeroUno);
// numeroDos=parseInt(numeroDos);


function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultadoSuma;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);

	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	resultadoSuma= numeroUno + numeroDos;

	alert("El resultado es " + resultadoSuma);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultadoResta;

	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultadoResta=(numeroUno-numeroDos);
	alert("El resultado es " + resultadoResta);

}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultadoMultiplicacion;

	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultadoMultiplicacion=(numeroUno * numeroDos);

	alert("El resultado es " + resultadoMultiplicacion);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultadoDivision;

	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultadoDivision=(numeroUno / numeroDos);

	alert("El resultado es " + resultadoDivision);


	
}


