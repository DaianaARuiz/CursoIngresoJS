/*Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, 

en Invierno: bariloche tiene un aumento del 20% 
			cataratas y Cordoba tiene un descuento del 10% 
			Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
			cataratas y Cordoba tiene un aumento del 10% 
			Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
					cataratas tiene un aumento del 10% 
					Mar del plata tiene un aumento del 10% y 
					Cordoba tiene el precio sin descuento

*/


function mostrar()
{
	var estacionElegida;
	var destinoElegido;
	var precioBaseEstadia;
	var aumento;
	var descuento;
	var precioFinal;

	estacionElegida =txtIdEstacion.value;
	destinoElegido= txtIdDestino.value;

	precioBaseEstadia= 15000;
	aumento=0;
	descuento=0;

	switch(estacionElegida)
	{
		case "Invierno":
			if(destinoElegido=="Bariloche")
			{
				aumento=20;
			}
			if(destinoElegido=="Mar del plata")
			{
				descuento=20;
			}
			if(destinoElegido=="Cataratas" || destinoElegido=="Cordoba")
			{
				descuento=10;
			}
			break;
		case "Verano":
			if(destinoElegido=="Cataratas" || destinoElegido=="Cordoba")
			{
				aumento=10;
			}else
			{
				if(destinoElegido=="Mar del plata")
				{
					aumento=20;
				}else
				{
					descuento=20;
				}
			}
			break;
			default:
			if (destinoElegido!="Cordoba")
			{
				aumento=10;
			}
	}


	descuento= precioBaseEstadia*descuento/100;
	aumento= precioBaseEstadia*aumento/100;
	precioFinal= aumento + precioBaseEstadia - descuento;

	alert("La estadia en "+destinoElegido+" durante " +estacionElegida +", tiene un valor de $" + precioFinal);
}//FIN DE LA FUNCIÓN