import React from 'react'
import { useEffect, useState } from 'react'
// import io from 'socket.io-client'
// const socket = io.connect('http://localhost:4000')

const Chatbox = () => {
  // const [message, setMessage] = useState('')
  // const [messageReceived, setMessageReceived] = useState('')

  // const sendMessage = () => {
  //   socket.emit('send_message', { message})
  // }

  // useEffect(() => {
  //   socket.on('receive_message', (data) => {
  //     setMessageReceived(data.message)
  //   })
  // }, [socket]);

  return (
      <div>
      <input placeholder='Message...' onChange={(event) => {
        setMessage(event.target.value)
      }}/>
      <button onClick={sendMessage}>Send Message</button>
      <h4>Message: {messageReceived}</h4>
    </div>
  )
}

export default Chatbox