/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	var numeroRandom;	
	numeroRandom= Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

	console.log(numeroRandom);

	if(numeroRandom>8)
	{
		alert("EXCELENTE");
	}

	if(numeroRandom>3)
	{
		alert("APROBÓ");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN