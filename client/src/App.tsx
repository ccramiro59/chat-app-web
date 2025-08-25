import { useState, useEffect } from 'react'
import { io, Socket } from 'socket.io-client'

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const newSocket = io('http://localhost:3001/chat');

    setSocket(newSocket);

    newSocket.on('reply', (payload) => {
      setMessages((prev) => [...prev, `[CLIENT] (${payload.id}): ${payload.message}`]);
    });

    newSocket.on('user-connect', (payload) => {
      setMessages((prev) => [...prev, `[SERVER]: ${payload}`]);
    });


    newSocket.on('user-disconnect', (payload) => {
      setMessages((prev) => [...prev, `[SERVER]: ${payload}`]);
    });

    return () => {
      newSocket.disconnect();
    };

  }, []);

  const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    socket?.emit('message', inputMessage);
    setMessages([ ...messages, `[ME]: ${inputMessage}` ]);
    setInputMessage('');
  };

  return (
    <>
      <h1>Hello Chat</h1>
      { messages.map((message, index) => <p key={index}>{message}</p>) }
      <form onSubmit={onFormSubmit}>
        <input value={inputMessage} onChange={(evt) => setInputMessage(evt.target.value)} />
        <button type='submit'>Send</button>
      </form>
    </>
  )
}

export default App
