import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/vidro.jpg';

export default function Vidro(){
  return(
    <div className='fundo'>
    <div className='container-modal'>
      <Link  to='/' className='voltar-home'>Home</Link>
      <div className='topo'>
      <h1>Vidro</h1>
      <img src={img}/>
      </div>
    <div className='container-what'>
      <div className='reciclaveis'>
      <h2>Recicláveis</h2>
        <ul>
          <li>Garrafas</li>
          <li>Potes de Conservas</li>
          <li>Embalagens</li>
          <li>Frascos de Remédios</li>
          <li>Copos</li>
          <li>Cacos dos Produtos Citados</li>
          <li>Para-brisas</li>
        </ul>
      </div>

      <div className='nao-reciclaveis'>
        <h2>Nâo recicláveis</h2>
         <ul>
          <li>Espelhos</li>
          <li>Boxes Temperados</li>
          <li>Louças</li>
          <li>Cerâmicas</li>
          <li>Óculos</li>
          <li> Pirex</li>
          <li> Porcelanas</li>
          <li>  Vidros Especiais (tampa de forno e micro-ondas)
 	Tubo de TV</li>
        </ul>         
      </div>
     </div> 
    </div>
    </div>
  )
}