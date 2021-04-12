import React, { useState} from 'react';
import { Redirect } from 'react-router-dom';

import styled from 'styled-components';

const NavContainer = styled.div`
   width: 100%;
   height: 60px;
   background: white;
   border-bottom: 1px solid #eee;
`
const Logo = styled.h1`
   margin: 0;
   padding: 12px 2%;
   font-size: 1.5em;
   color: #CC0000;
   float: left
`
const Button = styled.button`
   padding: 10px 30px;
   float: right;
   margin: 10px 2%;
   font-weight: bold;
   font-size:1em;
   border: none;
   background:#CC0000;
   cursor: pointer; 
   color: white;
   border-radius: 5px;
   outline: none;
`
function Navigation(){
    let button;
    const [redirect, setRedirect] = useState(null);

    const logOutHandler = () =>{
        localStorage.removeItem('TOKEN');
        setRedirect(<Redirect to="/"/>);
    }
    localStorage.TOKEN ? button = <Button onClick={logOutHandler}>Log out</Button> : button = <Button>Join</Button>
    return(
        <NavContainer>
            {redirect}
            <Logo>KOTHABOLO</Logo>
            {button}
        </NavContainer>
    );
};

export default Navigation;