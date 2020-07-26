/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 NO HACER NADA, pero si no es asi, y es soltero y no es menor, 
 mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/



// function mostrar()
// {
// 	var edadIgresada;
// 	var selectEstadoCivil;

// 	edadIgresada= txtIdEdad.value; 
// 	edadIgresada=parseInt(edadIgresada);

// 	selectEstadoCivil= estadoCivil.value;

// 	if(edadIgresada>17 && selectEstadoCivil=="Soltero")
// 	{
// 		alert("Es soltero y no es menor.");
// 	}
	 


// }//FIN DE LA FUNCIÓN







//AGREGADO A: 

/*Se pide ingresar una edad y un estado cicvil
	/a todos los mayores de edad, mostrar el mensaje "se responsable"
	/a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	/a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	/a los niños tambien informar "hagan la tarea" 
	/a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

*/

function mostrar()
{
	var edadIgresada;
	var selectEstadoCivil;

	edadIgresada= txtIdEdad.value; 
	edadIgresada=parseInt(edadIgresada);

	selectEstadoCivil= estadoCivil.value;
	 
	if(edadIgresada>17)
	{
		alert("Se responsable");

		if(edadIgresada>60)
		{
			alert("sos persona de riesgo");
		}

		if(selectEstadoCivil=="Soltero")
		{
			alert("a vivir la vida");
		}
		if(selectEstadoCivil=="Casado")
		{
			alert("a disfrutar la pareja");
		}

	}else
	{ 
		alert("respeta a tus mayores");

		if(edadIgresada<13)
		{
			alert("hagan la tarea");
		}else 
			if (selectEstadoCivil != "Soltero")
			{
				alert("sos muy joven para no ser soltero");
			}
	}

	if(selectEstadoCivil=="Divorciado")
		{
			alert("a intentarlo nuevamente");
		}
}
