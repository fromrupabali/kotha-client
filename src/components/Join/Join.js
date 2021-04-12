import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';

import Navigation from '../Navigation/Navigation';
import { serverUrl } from '../../utils';
import Spinner from '../Modals/Spinner';

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
   font-size: 18px;
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [spinner, setSpinner] = useState(false);
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(null);

  const [sign, setSign] = useState(true);

  const switchHandler = ()=>{
       setSign(!sign);
       setName('');
       setEmail('');
       setPassword('');
       setMessage('');
  }
  const emailChangeHandler = (e) =>{
    setEmail(e.target.value);
  }
  const passwordChangeHandler = (e) =>{
    setPassword(e.target.value);
  }
  const nameChangeHandler = (e) =>{
    setName(e.target.value);
  }
  const signInHandler = async() =>{
    try {
        if(email && password){
            setMessage('');
            setSpinner(true);
            const user = await axios.post(
                serverUrl,
                {
                    query:`
                       query{
                           signIn(email:"${email}", password:"${password}"){
                               success
                               token
                               userId
                               error_message
                               success
                           }
                       }
                    `
                }

            );
            if(user.data.data.signIn.success){
                localStorage.setItem('TOKEN', user.data.data.signIn.token);
                localStorage.setItem('userId', user.data.data.signIn.userId);
                setRedirect(<Redirect to="/chat"/>);
            }else{
                setMessage(user.data.data.signIn.error_message);
            }
            setSpinner(false);
            console.log(user);
        }
    } catch (error) {
        throw error;
    }
};
const signUpHandler = async() =>{
  try {
      if(email && password){
          setMessage('');
          setSpinner(true);
          const user = await axios.post(
              serverUrl,
              {
                  query:`
                     mutation{
                         signUp(email:"${email}", password:"${password}", userName:"${name}"){
                             success
                             token
                             userId
                             error_message
                             success
                         }
                     }
                  `
              }

          );
          if(user.data.data.signUp.success){
              localStorage.setItem('TOKEN', user.data.data.signUp.token);
              localStorage.setItem('userId', user.data.data.signUp.userId);
              setRedirect(<Redirect to="/chat"/>);
          }else{
              setMessage(user.data.data.signUp.error_message);
          }
          setSpinner(false);
          console.log(user);
          }
  } catch (error) {
      throw error;
  }
};
 useEffect(()=>{
   if(localStorage.TOKEN){
     setRedirect(<Redirect to="/chat" />)
   }
 },[]);
  if(sign){
     content = <SignContainer>
              <Title>Sign in</Title>
              <InputBox>
                  <Input onChange={emailChangeHandler} value={email} type="email" placeholder="Email"/>
              </InputBox>
              <InputBox>
                  <Input onChange={passwordChangeHandler} value={password} type="password" placeholder="Password"/>
              </InputBox>
              <p style={{color: "red"}}>{message}</p>
              <InputBox>
                  <Button onClick={signInHandler}>Sign in</Button>
              </InputBox>
              <p >Haven't Account ? <SwitchButton onClick={switchHandler}>Join</SwitchButton></p>
          </SignContainer>
   }else{
     content = <SignContainer>
              <Title>Join</Title>
              <InputBox>
                  <Input onChange={nameChangeHandler} value={name} type="text" placeholder="User name"/>
              </InputBox>
              <InputBox>
                  <Input onChange={emailChangeHandler} value={email} type="email" placeholder="Email"/>
              </InputBox>
              <InputBox>
                  <Input onChange={passwordChangeHandler} value={password} type="password" placeholder="Password"/>
              </InputBox>
              <p style={{color: "red"}}>{message}</p>
              <InputBox>
                  <Button onClick={signUpHandler}>Join</Button>
              </InputBox>
              <p>Already have an account ? <SwitchButton onClick={switchHandler}>Sign in</SwitchButton></p>
            </SignContainer>
   }
  return (
    <div>
        {redirect}
        <Spinner show={spinner}/>
        <Navigation />
        {content}
    </div>
  );
};

export default SignIn;

