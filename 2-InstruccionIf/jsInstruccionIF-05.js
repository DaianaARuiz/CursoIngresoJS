// Al ingresar una edad solo debemos informar 
// si la persona NO es adolescente.

function mostrar()
{
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(txtIdEdad);

	if(edadIngresada>17 || edadIngresada<13)
	{
		alert("no es adolescente");
	}
}//FIN DE LA FUNCIÓN


/*el 5
function mostrar()
{
	var edadIngresada;
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);
	

	//errores
	if(edadIngresada>17 && edadIngresada<13)//ninguna
	{
		alert("nunca entra");
	}

	if(edadInresada<18 || edadInresada>12   )//todas
	{
		alert("adolescentes");
	}
	//fin errores



	if( edadIngresada<13)
	{
		alert("no es adolescentes");
	}

	if(edadIngresada>17)
	{
		alert("no es adolescentes");
	}




	if(edadIngresada>17 || edadIngresada<13)
	{
		alert("no es adolescentes");
	}

	if(!(edadInresada<18 && edadIngresada>12))
	{
		alert("no es adolescentes");
	}

	if(edadInresada<18 && edadIngresada>12   )
	{
		
	}else
	{
		alert("no es adolescentes");
	}

}//FIN DE LA FUNCIÓN
*/