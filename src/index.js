import React from 'react';
import ReactDOM from 'react-dom';

//const element = <h1> Hello, Word </h1>
// Creas el elemento que se quiere mostrar.

const container= document.getElementById('app');
//Llamas al lugar donde queres que se muestre. (Debe estar en el html).

//ReactDOM.render(__que__,__donde__);
const nombre='jose';

const sum = () => 2 + 3; 

const jsx = (
<div>
    <h1>hola soy el participante numero {sum()} </h1>
    <p>Mi nombre es {nombre} </p>

</div>



);

ReactDOM.render(jsx,container);