import './App.css';
import socketClient from 'socket.io-client';


const server = 'http://localhost:3000'
// console.log('app.js read')

function App() {
  const socket = socketClient(server)
  socket.on('connection', (connection) => console.log(connection))
  return (
    <>
    <h2>Chat Room</h2>
    <div style={{ height: '300px', width: '500px', border: '1px solid salmon' }}>
      messages will go here...
      <ul id='messages'></ul>
    </div>
      <form id='form'>
        <input id='input' autoComplete='off' />
        <button>full send</button>
      </form>
    </>
  );
}

export default App;
