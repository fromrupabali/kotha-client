import React, { useState } from 'react';
// import { Link } from "react-router-dom";

import Navigation from '../Navigation/Navigation';

import styled from 'styled-components';

const SignContainer = styled.div`
   width: 25%;
   height: auto;
   padding: 2% 3%;
   background: white;
   margin: 50px 0 0 32%;
   border-radius: 5px;
   text-align: center;
`
const Title = styled.h1`
   margin:0;
   padding:10px 0;
   font-weight: 500;
`
const InputBox = styled.div`
   padding: 5px 0;
`
const Input = styled.input`
   width: 90%;
   padding: 15px 5%;
   border: 1px solid #eee;
   outline: none;
   font-size: 15px;
`
const Button = styled.button`
   padding: 13px 50px;
   border: 1px solid #eee;
   outline: none;
   background: #CC0000;
   border: none;
   cursor: pointer;
   color: white;
   border-radius: 5px;
   font-weight: bold;
   font-size: 16px;

`
const SwitchButton = styled.button`
   backround: none;
   border: none;
   background: none;
   cursor:pointer;
   font-size: 18px;
   outline: none;
   &:hover{
     color:#CC0000;
   }
`

function SignIn() {
  let content;
  // const [name, setName] = useState('');
  // const [room, setRoom] = useState('');
  const [sign, setSign] = useState(true);
  if(sign){
     content = <SignContainer>
              <Title>Sign in</Title>
              <InputBox>
                  <Input type="email" placeholder="Email"/>
              </InputBox>
              <InputBox>
                  <Input type="password" placeholder="Password"/>
              </InputBox>
              <InputBox>
                  <Button>Sign in</Button>
              </InputBox>
              <p >Haven't Account ? <SwitchButton onClick={()=>{setSign(false)}}>Join</SwitchButton></p>
          </SignContainer>
   }else{
     content = <SignContainer>
              <Title>Join</Title>
              <InputBox>
                  <Input type="text" placeholder="User name"/>
              </InputBox>
              <InputBox>
                  <Input type="email" placeholder="Email"/>
              </InputBox>
              <InputBox>
                  <Input type="password" placeholder="Password"/>
              </InputBox>
              <InputBox>
                  <Button>Join</Button>
              </InputBox>
              <p>Already have an account ? <SwitchButton onClick={()=>{setSign(true)}}>Sign in</SwitchButton></p>
            </SignContainer>
   }
  return (
    <div>
        <Navigation />
        {content}
    </div>
  );
};

export default SignIn;

