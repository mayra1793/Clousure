function suma(num1){
return function(num2){
	return num1 + num2;
	}
}
var suma2= suma(2);
console.log(suma2(5)); // deberìa mostrar 7 de resultado
var suma12= suma(12);
console.log(suma12(76)); // deberìa mostrar 7 de resultado