import React from 'react';
import ReactDom from 'react-dom';
//import Primeiro from './componentes/Primeiro';
//import BomDia from './componentes/BomDia';
//import {BoaTarde, BoaNoite} from './componentes/Multiplos';
import Saudacao from './componentes/Saudacao';

//const elemento = <h1>React</h1>

ReactDom.render(
<div>
 <Saudacao tipo="Bom dia" nome="Bruno"/>
</div>
, document.getElementById('root'))