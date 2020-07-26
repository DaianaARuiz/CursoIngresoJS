/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{	/*
	// HECHO CON IF:
 	var cantidadLamparas;
 	var marcaLampara;
 	var descuento;
 	var precioBruto;
 	var precioConDescuento;
 	var impuesto;
 	cantidadLamparas= txtIdCantidad.value;
 	cantidadLamparas=parseInt(cantidadLamparas);
 	
 	marcaLampara= Marca.value;

 	precioBruto= 35;
	descuento=0;

	//Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%
 	if(cantidadLamparas>5)
 	{
		descuento=50;
 
 	}else //compra menos de 6 ...
 	{ 		
		if(cantidadLamparas==5) //compra 5 
 		{
 			if(marcaLampara=="ArgentinaLuz")
 			{
 				descuento=40;  //y si es de la marca argenluz 50%descuento
 			}else //si es otra marca 30%
 			{
 			descuento=30;
 			}
 		}

 		if(cantidadLamparas==4) //compra 4
 		{
 			if(marcaLampara=="FelipeLamparas" || marcaLampara=="ArgentinaLuz")
 			{
 				descuento=25;
 			}else
 			{
 				descuento=20;
 			}
 		}

 		if(cantidadLamparas==3)
 		{

 			if(marcaLampara!="ArgentinaLuz" && marcaLampara!="FelipeLamparas")
 			{
 				descuento=5;
 			}else{
 				if(marcaLampara=="ArgentinaLuz")
 				{
 					descuento=15;
 				}else
 				{
 					descuento=10;
 				}
 			}
 			/* ASI NO FUNCIONA: porque el else involucra tambien a argluz 
 			if(marcaLampara=="ArgentinaLuz")
 			{
 				descuento=15;
 			}
 			if(marcaLampara=="FelipeLamparas")
 			{
 				descuento=10;
 			}else
 			{
 				descuento=5;
 			}
 		}
 	}
 		precioBruto=precioBruto*cantidadLamparas;
		descuento= precioBruto*descuento/100;
 		precioConDescuento= precioBruto-descuento;

 		if(precioConDescuento>120)
 		{
 			impuesto= precioBruto*10/100;
 			precioConDescuento= precioConDescuento+impuesto; 
			alert("Usted pago $"+impuesto+" de IIBB.");
 		}

 		txtIdprecioDescuento.value= precioConDescuento;		
} */

	//Hecho con if y switch:

	var cantidadLamparas;
 	var marcaLampara;
 	var descuento;
 	var precioBruto;
 	var precioConDescuento;
 	var impuesto;
 	
 	cantidadLamparas= txtIdCantidad.value;
 	cantidadLamparas=parseInt(cantidadLamparas);

 	marcaLampara= Marca.value;

 	precioBruto= 35;
	descuento=0;


	if(cantidadLamparas>5)
	{
		descuento=50;
	}else
	{
		switch(cantidadLamparas)
		{
			case 5:
				if(marcaLampara=="ArgentinaLuz")
				{
					descuento=40;
				}else
				{
					descuento=30;
				}
				break;
			case 4:
				if(marcaLampara=="FelipeLamparas" || marcaLampara=="ArgentinaLuz")
 				{
 					descuento=25;
 				}else
 				{
 					descuento=20;
 				}
 				break;
 			case 3:
 				if(marcaLampara!="ArgentinaLuz" && marcaLampara!="FelipeLamparas")
 				{
 					descuento=5;
 				}else
 				{
 					if(marcaLampara=="ArgentinaLuz")
 					{
 						descuento=15;
 					}else
 					{
 						descuento=10;
 					}
 				}
 				break;
		}

	}	
	precioBruto=precioBruto*cantidadLamparas;
	descuento= precioBruto*descuento/100;
 	precioConDescuento= precioBruto-descuento;

 	if(precioConDescuento>120)
 	{
 		impuesto= precioBruto*10/100;
 		precioConDescuento= precioConDescuento+impuesto; 
		alert("Usted pago $"+impuesto+" de IIBB.");
 	}

 	txtIdprecioDescuento.value= precioConDescuento;	
	
}

