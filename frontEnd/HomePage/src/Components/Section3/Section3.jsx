import {Link} from 'react-router-dom';
import React from 'react'
import './Section3.css';
import Card from '../Conteiners/Card/Card.jsx';
import { BiPaperclip } from 'react-icons/bi';
import papel from '../../assets/papel.jpg';
import vidro from '../../assets/vidro.jpg';
import metal from '../../assets/metal.jpg';
import plastico from '../../assets/plastico.jpg';

const Section3 = ()=>{

    const material = [
        {
            imagem: papel,
            comp:'papel',
            nome: 'Papel',
            texto: 'A reciclagem do papel é de extrema importância para o meio ambiente. Como sabemos, o papel é produzido através da celulose de determinados tipos de árvores. Quando reciclamos o papel ou compramos papel reciclado estamos contribuindo com o meio ambiente, pois árvores deixaram de ser cortadas.  '
        },
        {
            imagem: plastico,
            comp:'plastico',
            nome: 'Plastico',
            texto: 'Reciclar 1 tonelada de plástico economiza 130 Kg de petróleo, um recurso natural que pode se esgotar em menos de 40 anos. No Brasil, consumimos mais de 6 milhões de toneladas de plástico por ano, mas apenas 21% é reciclado.'
        },
        {
            imagem: vidro,
            comp:'vidro',
            nome: 'Vidro',
            texto: 'A reciclagem de vidro é de extrema importância para o meio ambiente. Quando reciclamos o vidro, ou compramos vidro reciclado, estamos contribuindo. Esse material deixa de ir para os aterros ou para a natureza. Lembrando sempre do longo tempo para sua decomposição.'
        },
        {
            imagem: metal,
            comp:'metal',
            nome: 'Metal',
            texto: 'O grande benefício da reciclagem de metais é evitar a etapa de extração e beneficiamento do minério, que é uma atividade que envolve alto consumo de água e energia.'
        }        
    ]


    return(
        <div className="section3">
            <p className="title"> Porque reciclar ? </p>
            <div className='container-mat'>
                {material.map((item)=>{
                    return(
                        <div className='box-card' key={item.nome}>
                           
                            <Link className='what' to={item.comp}>O que reciclar? </Link>
                         
                            <img src={item.imagem}/>
                            <h2>{item.nome}</h2>
                            <p className='faixa'></p>
                            <span className='text-card'>{item.texto}</span>
                        </div>
                    );
                })}
            </div>            
        </div>
    );
}

export default Section3;