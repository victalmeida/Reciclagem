import React from 'react';
import {Link} from 'react-router-dom';
import img from '../../assets/papel.jpg';

export default function Papel(){
  return(
    <div className='fundo'>
      <div className='container-modal'>
          <Link  to='/' className='voltar-home'>Home</Link>
          <div className='topo'>
          <h1>Papel</h1>
          <img src={img}/>
          </div>
        <div className='container-what'>
            <div className='reciclaveis'>
            <h2>Recicláveis</h2>
              <ul>
                <li>Jornais e Revistas</li>
                <li>Listas Telefônicas</li>
                <li>Papel Sulfite/Rascunho</li>
                <li>Papel de Fax</li>
                <li>Folhas de Caderno</li>
                <li>Formulários de Computador</li>
                <li>Caixas em Geral (papelão ondulado)</li>
                <li> Fotocópias</li>
                <li> Envelopes</li>
              </ul>
            </div>

            <div className='nao-reciclaveis'>
              <h2>Nâo recicláveis</h2>
              <ul>
                <li>Etiquetas Adesivas</li>
                <li> 	Papel Carbono</li>
                <li> 	Papel Celofane</li>
                <li> 	Fita Crepe</li>
                <li>	Papéis Sanitários</li>
                <li>	Papéis Parafinados</li>
                <li>Papéis Plastificados</li>
                <li>Guardanapos</li>
                <li>Bitucas de Cigarros</li>
                <li> Papel fotográfico</li>
              </ul>         
            </div>
          </div>  
      </div>
    </div>
  )
}