
import React from 'react';
import eletronico from '../../assets/eletronico.jpg';
import './section4.css';


export default function Section4(){
    return(
        <div className='container-eletro'>
            <div className='eletric-card'>
                <img src={eletronico}/>
            </div>
            <div className='eletric-card'>
                <h2>Lixo eletrônico</h2>
                <p className='faixa'></p>
                <p>
                  Dentre os principais danos causados pelo lixo eletrônico ao meio ambiente,
                  temos a contaminação por metais pesados, os aterros sanitários e os danos causados à saúde pública, 
                  pois os metais estão compostos por substâncias poluentes, que afetam a qualidade do solo, da água,
                  dos rios e dos lençóis freáticos, tendo em vista que, estes são descartados de forma irregular 
                  em aterros sanitários, estando acessível à população que vive no entorno desses aterros, 
                  ou aqueles que, sobrevivem recolhendo esses resíduos.
                </p>
            </div>
        </div>
    );
}