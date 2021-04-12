import React, {useState, useEffect} from 'react';
import { Redirect } from "react-router-dom";

import axios from 'axios';
import { serverUrl } from '../../utils';

import Navigation from '../Navigation/Navigation';
import User from './User';
import ImageInput from '../../assets/image.svg';
import Avatar from '../../assets/avatar.svg';

import styled from 'styled-components';

const ChatContainer = styled.div`
   width: 100%;
   height: 92vh;
`
const UserList = styled.div`
   width: 400px;
   height: 100%;
   background: white;
   float: left;
   overflow-y: scroll;
   padding-left: 1.3%;
`
const Title = styled.h3`
    margin: 0;
    padding: 3%;
    text-transform: uppercase;
    font-weight: 500;
`
const MessageContainer = styled.div`
   width: 50%;
   height: 95%;
   float: right;
   margin-right: 13%;
   margin-top: 1.2%;
   border-radius: 5px;
   background: white;
`

const SelectedUser = styled.div`
   width: 100%;
   height: 100px;
   border-bottom: 1px solid #eee;
`
const UserImage = styled.div`
   width: 15%;
   height: 100%;
   float: left;
   text-align: center;
`
const Image = styled.img`
   width: 80px;
   height: 80px;
   border-radius: 100%;
   margin-top: 10px;
`
const UserDetails = styled.div`
   width: 82%;
   height: 100%;
   float: right;
`
const UserName = styled.h1`
   margin:0;
   padding: 17px 0 5px 0;
   font-weight: 500;
   font-size: 1.5em;
`
const Location = styled.p`
   margin:0;
   padding: 0;
   color: gray;
`
const MessageCanvas = styled.div`
   width: 100%;
   height 70%;
   overflow-y: scroll;
   
`
const Messages = styled.div`
   width: 90%;
   height: auto;
   padding: 5%;
`
const Message = styled.p`
   width: 80%;
   display: block;
   padding: 1% 2%;
   background: #F1F1F4;
   float: right;
   margin: 5px 0;
   border-radius: 10px;
`
const MessageBox = styled.div`
   width: 100%;
   height:100px;
   border-top: 1px solid #eee;
`
const InputBox = styled.div`
   width: 85%;
   height: auto;
   padding: 10px;
   float: left;
`
const Input = styled.input`
   width: 92%;
   padding: 20px 4%;
   background: #F1F1F4;
   border: none;
   border-radius: 30px;
   outline: none;
   font-size: 1em;
   overflo-y: scroll;
`
const ImageButton = styled.button`
   float: right;
   background: #F1F1F4;
   border-radius: 100%;
   border: none;
   padding: 11px 13px;
   margin: 2% 3% 0 0;
   outline: none;
   cursor: pointer;
   &:hover{
      background: #C7EDFC;
   }
`
const ButtonImage = styled.img`
   width: 25px;
   height: 25px;
`

let SendMessages = [];
function Chat(){
  let messages, peoples, messageContainer;

  const [redirect, setRedirect] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [complete, setComplete] = useState(false);
  const [roomUser, setRoomUser] = useState(null);

  const fetchUsers = async()=>{
     try {
        const users = await axios.post(
            serverUrl,
            {
               query:`
                 query{
                    users{
                       _id,
                       email,
                       userName
                    }
                 }
               `
            }
        );
        console.log(users);
        setUsers(users.data.data.users);
        setComplete(true);
     } catch (error) {
        throw error;
     }
  }

  const roomHandler = (id) =>{
     setRoomUser(users[id]);
     SendMessages = [];
  }
  
  if(complete){
     if(users.length > 0){
        peoples = users.map((user, id)=>{
           if(user._id !== localStorage.userId){
            return<User roomHandler={roomHandler} key={user._id} id={id} user={user} />
           }else{
              return null;
           }
        });
     }else{
        peoples = <p>Loading ....</p>
     }
  };

  //Show message
   if(SendMessages.length > 0){
      messages = SendMessages.map(message=>{
         return<Message>{message}</Message>
      });
   }else{
   messages=<p style={{textAlign:"center", fontSize: "20px", paddingTop: "20%"}}>Start conversation</p>
 }
 //send message
 const sendMessage = (e)=>{
   if(message){
    if(e.keyCode === 13){
      SendMessages.push(message);
      setMessage('');
    }
   }
}
 //Set room user
  if(roomUser){
     messageContainer =  <MessageContainer>
     <SelectedUser>
       <UserImage>
         <Image src={Avatar} alt="user"/>
       </UserImage>
       <UserDetails>
           <UserName>{roomUser.userName ? roomUser.userName:"Unknown"}</UserName>
           <Location>Dhaka, Bangladesh</Location>
       </UserDetails>
     </SelectedUser>
     <MessageCanvas>
         <Messages>
            {messages}
         </Messages>
     </MessageCanvas>
     <MessageBox>
        <InputBox>
           <Input value={message} onChange={(e)=>{setMessage(e.target.value)}} onKeyUp={(e)=>sendMessage(e)} type="text" placeholder="Type a message"/>
        </InputBox>
        <ImageButton>
           <ButtonImage src={ImageInput} />
        </ImageButton>
     </MessageBox>
 </MessageContainer>;
  }else{
     messageContainer = <MessageContainer>
        <p style={{textAlign: "center", paddingTop:"30%", fontSize:"1.5em"}}>Select people and start conversation.</p>
     </MessageContainer>
  }
  useEffect(()=>{
    if(!localStorage.TOKEN){
      setRedirect(<Redirect to="/" />);
    }else{
       fetchUsers();
    }
    
  },[]);
   
   return(
     <div>
        {redirect}
        <Navigation />
        <ChatContainer>
          <UserList>
             <Title>Peoples</Title>
             {peoples}
          </UserList>
         {messageContainer}
        </ChatContainer>
    </div>
  );
};
export default Chat;
