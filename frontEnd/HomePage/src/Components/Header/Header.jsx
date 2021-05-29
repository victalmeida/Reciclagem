import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import './Header.css';
import { Link } from "react-router-dom";
import consts from '../../const'

const Header = () => {

    const redirectLogin = () =>
    {
        
        window.location.href = `${consts.BASE_URL}/login`;
    }

        return(
     <div>
        {/* <Navbar bg="dark" variant="dark" expand="lg" className='menu'> */}
        <Navbar  expand="lg" className='menu'>
        <Navbar.Brand href="/"> 
            <img src={logo} alt="" className="logoNav"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
           <Nav.Link href="#home" className="" style={{ color: "black" }}>
           <Link to="/cadastrar">
                <Button className="btn-primary cadastrar" > CADASTRAR </Button>
            </Link>
            </Nav.Link> 

            <Nav.Link href="#">
                <Button className="botaoEntrar" onClick={() => redirectLogin()}> LOGIN </Button>
           
            </Nav.Link>
            
            
            </Nav>
        </Navbar.Collapse>
        </Navbar>

     </div>
    );

}

export default Header;