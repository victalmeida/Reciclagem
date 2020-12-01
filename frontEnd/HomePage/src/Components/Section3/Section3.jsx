import React from 'react'
import './Section3.css';
import Card from '../Conteiners/Card/Card.jsx';

const Section3 = ()=>{
    return(
        <div className="section3">
            <p className="title"> O que se pode Reciclar ? </p>
            <Card color='warning' texto='METAL' />
            <Card color='success' texto='VIDRO' />
            <Card color='danger' texto='PLATICO - ISOPOR' />
            <Card color='primary' texto='PAPEL - PAPELÃO' />
        </div>
    );
}

export default Section3;