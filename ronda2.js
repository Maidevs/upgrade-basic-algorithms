"use strict";// esto hace que no puedas utilizar ninguna variable que no esté anteriormente declarada. 
//Se pone al inicio del documento js, para que lo aplique a lo de abajo.

let variable; 
variable= 10;
console.log(variable);

let varText= 'Hola Mundo';
console.log(typeof varText); //string es texto

let varNum= 18;
console.log(typeof varNum);// numero

let variableDeci= 18.5;
console.log(typeof variableDeci);//Decimal

let varBoolean= true;
console.log(typeof varBoolean);//Boolean

let varBigint= 18n;
console.log(typeof varBigint);// bumeros de longitud arbitraria

let a;
console.log(typeof a);//undefined es el tipo

a= null;
console.log(typeof a);//null es tipo de objeto