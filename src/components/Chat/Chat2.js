// import React, {useState, useEffect} from 'react';
// import queryString from 'query-string';
// import io from 'socket.io-client';

// import './Chat.css';

// let socket;
// let Endpoint = 'localhost:5000';

// function Chat({location}){
//     const [name, setName] = useState('');
//     const [room, setRoom] = useState('');
//     const [messages, setMessages] = useState([]);
//     const [message, setMessage] = useState('');

//     useEffect(()=>{
//        const {name, room } = queryString.parse(location.search);
//        console.log(name,room);

//        setName(name);
//        setRoom(room);
//        var connectionOptions =  {
//             "force new connection" : true,
//             "reconnectionAttempts": "Infinity", 
//             "timeout" : 10000,                  
//             "transports" : ["websocket"]
//        };
//        socket = io(Endpoint, connectionOptions);
//        console.log(socket);

//     //    socket.emit('join', {name, room}, ({error})=>{
//     //        alert(error);
//     //    });
//        return () =>{
//            socket.emit('disconnect');
//            socket.off();
//        }
//     },[Endpoint, location.search]);

//     useEffect(()=>{
//         setMessages([...messages, message]);

//     },[]);

//     const sendMessage = (event)=>{
//         event.preventDefault();
//         if(message){
//             socket.emit('sendMessage', message, ()=> setMessage(''))
//         }
//     };

//     console.log(message, messages);

//     return(
//         <div className="outerContainer">
//             <div className="container">
//                 <input 
//                   type="text"
//                   onChange={(e)=>{setMessage(e.target.value)}}
//                   onKeyPress={(e)=>e.key === 'Enter'? sendMessage(e): null}
//                  />
//             </div>
//         </div>
//     );
// };

// export default Chat;
//  <div className="joinInnerContainer">
//         <h1 className="heading">Join</h1>
//         <div>
//           <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
//         </div>
//         <div>
//           <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
//         </div>
//         <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
//           <button className={'button mt-20'} type="submit">Sign In</button>
//         </Link>
//       </div> 