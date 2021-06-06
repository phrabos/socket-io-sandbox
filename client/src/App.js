import React, { useState, useEffect, useRef } from 'react';
import socketClient from 'socket.io-client';


const server = 'http://localhost:3000'

function App() {
  const [message, setMessage] = useState('');
  const [display, setDisplay] = useState([]);
  const socketRef = useRef();
  
  useEffect(() => {
    socketRef.current = socketClient(server)

  }, [])

  useEffect(() => {
    // const socket = socketClient(server)
    socketRef.current.on('chat-received', (text) => {
      setDisplay(prev => [...prev, message])
    })

  })

  const handleSubmit = (e) => {
    e.preventDefault();
    socketRef.current.emit('chat-input', message);
    // setDisplay((prev) => [...prev, message])
    // setHackRender(hackRender ? false : true);
    
  }

  return (
    <>
    <h2>Chat Room</h2>
    <div style={{ height: '300px', width: '500px', border: '1px solid salmon' }}>
      <h3>messages will go here...</h3>
      {/* <p id='messages'>{display[0]}</p> */}
      {display.length && display.map((msg, i) => <p key={i}>{msg}</p>)}
    </div>
      <form id='form'  onSubmit={handleSubmit}>
        <input 
          id='input' 
          autoComplete='off' 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>full send</button>
      </form>
    </>
  );
}

export default App;
