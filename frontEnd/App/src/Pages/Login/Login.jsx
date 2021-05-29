import React,{ useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import { Container, Row, Col, InputGroup, FormControl , Form} from 'react-bootstrap';
import { AiOutlineUser } from "react-icons/ai";
import { BsFillLockFill } from "react-icons/bs";
import logo from '../../assets/logo.png'
import Header from '../../Components/Header/Header'
import {auth} from '../../Utils/api';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Redirect} from 'react-router-dom';




const Login = () => {

    const [redirect, setRedirect] = useState(false);
    
    useEffect(() =>{
        if(localStorage.getItem('token'))
        {
            setRedirect(true);
        }

    },[]);
   

    const handleSalvar = (event) => {

    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    auth.post('auth/login',{
        email,
        password
    }).then( (response) => {;
        const token =  response.data.token;
        localStorage.setItem('token', token);
        // setRedirect(true);
       document.location.reload();
    }).catch((error)=>{
        if(error.response.status === 401)
        {
            NotificationManager.warning('Usuario ou Senha Errado');
        }
        console.log(error.response.status)
    });

    }

    return (
        <>
        { redirect && <Redirect to= "/" /> }
        <NotificationContainer />
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

                        <button className="btn btn-light w-100 btnLogin"> Login </button>
                    </form>




                <Link to= '/'>Criar uma conta</Link>
            </div>
        </div>
        </>
    );
}

export default Login;