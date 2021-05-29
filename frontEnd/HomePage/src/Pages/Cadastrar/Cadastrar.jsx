import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Cadastrar.css';
import {FormControl, Form , Button} from 'react-bootstrap';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Redirect } from "react-router-dom";
import consts from '../../const'
import Header from '../../Components/Header/Header';
import logo from '../../assets/logo.png';

const axios = require('axios').default;




const Cadastrar = () => {

  const [redirect, setReditect] = useState();

  const Validar = (e) =>
{
    e.preventDefault();

    console.log('teste');
    const nome =   document.getElementById('nome').value;
    const email =  document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;

    console.log(consts.BASE_URL);

    if(senha !== confirmSenha)
    {
        NotificationManager.error('Senhas Diferentes');
        return;
    }
    console.log(consts.BASE_URL);
    axios.post(`${consts.BASE_URL}/auth/cadastrar`,{
        nome: nome ,
        email: email ,
        password: senha ,

    })
  .then(function (response) {
    console.log(response);
    window.location.href = `${consts.BASE_URL}/login`;
  })
  .catch(function (error) {
    // handle error
    console.log('error:',error);
  })

    
}



    return (
        <>
        
            {redirect  && <Redirect to="/login" />}
             <NotificationContainer />
      
<div className = 'container-center'>
    <div className = 'login'>
    <div className = 'logo-area'>
        <img src={logo}/> 
    </div>
        <Form >

            <Form.Group controlId="Nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" id="nome" placeholder="Nome" />
                </Form.Group>


                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" id="email" placeholder="emial@email.com" />
                </Form.Group>

                <Form.Group controlId="ConfirmationEmail">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control size="sm" type="password" id="senha" placeholder="*****" />
                </Form.Group>

                <Form.Group controlId="Password">
                    {/* <Form.Label>Confirme sua Senha</Form.Label> */}
                    <Form.Control size="sm" type="password" id="confirmSenha" placeholder="Confirme sua senha" />
                </Form.Group>

            <Button variant="dark" type="submit" style={{width:'100%'}} onClick={e => Validar(e) }> Enviar </Button>
        </Form>

        <Link to= '/'>ja tem uma conta? Entre.</Link>
 
    </div>
</div>
    
        </>
    );

}

export default Cadastrar;
//   <Link to= '/'>ja tem uma conta? Entre.</Link>


