import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/metal.jpg';
import './styles.css';

export default function Metal(){
  return(
    <div className='fundo'>
    <div className='container-modal'>
      <Link  to='/' className='voltar-home'>Home</Link>
      <div className='topo'>
      <h1>Metal</h1>
      <img src={img}/>
      </div>
    <div className='container-what'>

      <div className='reciclaveis'>
      <h2>Recicláveis</h2>
        <ul>
          <li>Tampinhas de Garrafas</li>
          <li>Latas</li>
          <li>Panelas sem cabo</li>
          <li>Ferragens</li>
          <li>Arames</li>
          <li>Chapas</li>
          <li>Canos</li>
          <li> Pregos / Parafusos / Ferramentas</li>
        </ul>
      </div>
      <div className='nao-reciclaveis'>

        <h2>Nâo recicláveis</h2>
         <ul>
          <li>Clipes</li>
          <li>Grampos</li>
          <li>Esponja de Aço</li>
          <li>Aerossóis</li>
          <li>Latas de Tinta Latas de Verniz</li>
          <li>Solventes Químicos</li>
          <li> Inseticidas</li>
        </ul>         
      </div>
      </div>
    </div>
    </div>
  )
}