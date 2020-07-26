/*Realizar el algoritmo que pida los datos necesarios para un 
triángulo equilátero por prompt 
y que muestre el perímetro por alert.*/
function mostrar()
{
	var cmLadosIngresadosTriangulo;
	var perimetroCalculado;


	cmLadosIngresadosTriangulo=prompt("Para calcular el perimetro del triangulo equilatero, ingrese la medida de sus lados (en centimetros):");

	perimetroCalculado= cmLadosIngresadosTriangulo*3;

	alert("El perimetro de ese triangulo es de: "+perimetroCalculado+" centimetros.");

}
