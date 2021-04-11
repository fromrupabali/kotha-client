import React from 'react';



import styled from 'styled-components';

const User = styled.div`
   width: 92%;
   height: 80px;
   background: white;
   margin: 0 0 2px 3%;
   cursor: pointer;
   border-radius: 5px;
   &:hover{
       background: #C7EDFC
   }
`
const ImageContainer = styled.div`
   width: 60px;
   height: 60px;
   background: red;
   float: left;
   margin: 10px 0 0 10px;
`
const Image = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 100%;
`
const UserDetails = styled.div`
   width: 260px;
   height: 100%;
   float: right;
`
const Title = styled.h5`
   margin: 0;
   padding: 15px 0 0 0;
   font-size: 1em;
   font-weight: 500;
`
const Location = styled.p`
    margin: 0;
    padding: 5px 0;
    font-size: 0.9em;
    font-weight: 400;
    color: gray;
`
const user = (props) =>{
    return(
      <User> 
          <ImageContainer>
              <Image src="https://www.cricfrenzy.com/imagestorages/app/2020-11/cricfrenzy1606584091Virat-Kohli.jpg" alt="user"/>
          </ImageContainer>
          <UserDetails>
              <Title>Virat Kohli</Title>
              <Location>Dhaka, Bangladesh</Location>
          </UserDetails>
      </User>
    );
};

export default user;