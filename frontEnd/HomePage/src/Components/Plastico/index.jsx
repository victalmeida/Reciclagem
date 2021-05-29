import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/plastico.jpg';


export default function Plastico(){
  return(
    <div className='fundo'>
    <div className='container-modal'>
      <Link  to='/' className='voltar-home'>Home</Link>
      <div className='topo'>
      <h1>Plástico</h1>
      <img src={img}/>
      </div>

    <div className='container-what'>
      <div className='reciclaveis'>
      <h2>Recicláveis</h2>
        <ul>
          <li>Copos</li>
          <li>Sacos/ Sacolas</li>
          <li>Frascos de produtos</li>
          <li>Tampas</li>
          <li>Potes</li>
          <li>Canos e Tubos de PVC</li>
          <li>Embalagens Pet (Refrigerantes, Suco, Óleo, Vinagre, etc.)</li>
        </ul>
      </div>

      <div className='nao-reciclaveis'>
        <h2>Nâo recicláveis</h2>
         <ul>
          <li>Cabos de Panelas</li>
          <li>Adesivos</li>
          <li>Espuma</li>
          <li>Acrílico</li>
          <li>Embalagens Metalizadas (Biscoitos e Salgadinhos)</li>     

        </ul>         
      </div>
      </div>
    </div>
    </div>
  )
}