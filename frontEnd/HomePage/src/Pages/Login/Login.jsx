import React from 'react'
import './Login.css';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { AiOutlineUser } from "react-icons/ai";
import { BsFillLockFill } from "react-icons/bs";
import logo from '../../assets/logo.png'
import Header from '../../Components/Header/Header'



const Login = () => {
    return (
        <>
        <Header />
        <div className="loginColumn" >
       
      
     
                {/* <Col xs={6}>
                    <div className="loginColumn">
                        <div className="logoCard">
                            <img src={logo} className="logoLogin" alt=""/>
                        </div>
                    </div>
                </Col> */}

              
                    {/* <div className="loginColumn"> */}
                        <div className=" loginCard">
                            <div className="userIcon">
                                <i>
                                <AiOutlineUser size={150} />
                                </i>
                                <br/>
                                USER LOGIN

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

                                <button className="btn btn-light w-100 btnLogin"> LOGIN </button>
                            </form>

                        {/* </div> */}
                    </div>
          
        </div>
        </>
    );
}

export default Login;