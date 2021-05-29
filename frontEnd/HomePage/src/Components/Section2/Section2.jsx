import React from "react"
import './Section2.css';
import { Carousel} from 'react-bootstrap';
import img1 from '../../assets/vida1.jpg';
import img2 from '../../assets/vida2.jpg';
import img4 from '../../assets/vida4.jpg';
import img5 from '../../assets/lata.jpeg';

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
              src={img5}
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
              className="d-block w-100 imgCarrousel" 
              src={img4}
              alt="Third slide"
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
    </Carousel>
 </div>
    );
}

export default Section2;