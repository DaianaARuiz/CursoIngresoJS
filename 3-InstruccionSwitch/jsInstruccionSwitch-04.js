/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/


function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días");
			break;

		case "Febrero":
			alert("Este mes tiene 29 días");
			break;

		default:
			alert("Este mes tiene 31 días");
			break;
	}
}//FIN DE LA FUNCIÓN