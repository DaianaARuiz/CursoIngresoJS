/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
	var resultadoAumento;

	sueldo= txtIdSueldo.value;
	sueldo=parseInt(sueldo);

	aumento= (sueldo*10)/100 + sueldo;

	document.getElementById("txtIdResultado").value=aumento;
}
