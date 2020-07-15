/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// declaraacion de variable
	var nombreIngresado;

	// carga de la variable
	nombreIngresado=prompt("ingrese nombre");

	// Mostrar la variable por ID,
	// Toma el dato de la variable y lo muestra en el cuadro de texto
	txtIdNombre.value=nombreIngresado;

}

