import React from 'react'
import {Link} from 'react-router-dom';
import './Login.css';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { AiOutlineUser } from "react-icons/ai";
import { BsFillLockFill } from "react-icons/bs";
import logo from '../../assets/logo.png';



const Login = () => {
    return (
        <>
    <div className = 'container-center'>
            <div className = 'login'>
                <div className = 'logo-area'>
                    <img src={logo}/> 
                </div>
                
                <form action="/">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="Username"> <AiOutlineUser /> </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="Username"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="Senha" > <BsFillLockFill /> </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Senha"
                                aria-label="Senha"
                                aria-describedby="UserSenhaname"
                                type="password"
                            />
                        </InputGroup>

                        <button className="btn"> Login </button>
                    </form>




                <Link to= '/'>Criar uma conta</Link>
            </div>
        </div>
        </>
    );
}

export default Login;




