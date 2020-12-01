import React from "react"
import './Section2.css';
import { Carousel} from 'react-bootstrap';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/4.jpg';
import img3 from '../../assets/5.jpg';

const Section2 = () =>
{
    return(
        <div className="section2">
            <Carousel className="Carrossel">
  <Carousel.Item>
    <img
      className="d-block w-100 imgCarrousel"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>Lixo Pet</h3>
      <p>Garraga Pet Redirada dos oceanos.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imgCarrousel" 
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block  imgCarrousel"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default Section2;