import React from 'react';
// import { Link } from "react-router-dom";

import Navigation from '../Navigation/Navigation';
import User from './User';

import styled from 'styled-components';

const ChatContainer = styled.div`
   width: 100%;
   height: 92.6vh;
`
const UserList = styled.div`
   width: 400px;
   height: 100%;
   background: white;
   float: left;
   overflow-y: scroll;
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
   margin-right: 12%;
   margin-top: 1%;
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
   height: 100%;
   padding: 5%;
  
`
const MessageBox = styled.div`
   width: 100%;
   height:100px;
   border-top: 1px solid #eee;
`
function Chat(){
  return(
    <div>
        <Navigation />
        <ChatContainer>
          <UserList>
             <Title>Peoples</Title>
             <User />
             <User />
             <User />
             <User />
             <User />
             <User />
             <User />
             <User />
             <User />
             <User />
             <User />
             <User />
          </UserList>
          <MessageContainer>
              <SelectedUser>
                <UserImage>
                  <Image src="https://www.cricfrenzy.com/imagestorages/app/2020-11/cricfrenzy1606584091Virat-Kohli.jpg" alt="user"/>
                </UserImage>
                <UserDetails>
                    <UserName>Virat Kohli</UserName>
                    <Location>Dhaka, Bangladesh</Location>
                </UserDetails>
              </SelectedUser>
              <MessageCanvas>
                  <Messages>

                  </Messages>
              </MessageCanvas>
              <MessageBox></MessageBox>
          </MessageContainer>
        </ChatContainer>
    </div>
  );
};
export default Chat;
