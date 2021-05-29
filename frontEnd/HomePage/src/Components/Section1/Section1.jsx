import React from "react"
import './Section1.css'
import sample from '../../assets/planta.mp4';
import logo from '../../assets/logo.png'
import { Container, Row, Col } from 'react-bootstrap';



const Section1 = ()=>{
    return(
        <div className="section1">
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
        <div className="box">
        <Container>
            <Row>
              
                <Col sm={0} className=""></Col>
                <Col xs={8} sm={12} className="">
                   <p className="textoSection1">Por um Mundo Melhor</p>
                </Col>
            </Row>
        </Container>
        </div>
        </div>
    );

}

export default Section1;