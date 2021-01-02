import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Mic } from '@material-ui/icons';
import { useParams } from "react-router-dom";
import db from "./firebase";
import './Chat.css';

function Chat(){

  const [ input, setInput] = useState("");
  const [ seed, setSeed] = useState("");
  const { roomID } = useParams();
  const [ roomName, setRoomName ] = useState("");
  const [ messages, setMessages ] = useState([]);

  useEffect(() => {
    if(roomID){
      db.collection('rooms')
        .doc(roomID)
        .onSnapshot(snapshot => {
          setRoomName(snapshot.data().Name)
        })

      db.collection('rooms')
        .doc(roomID)
        .collection('message').orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => {
          setMessages(snapshot.docs.map((doc) => doc.data()))
        })
      }
  }, [roomID])

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const SendMessage = (e) => {
    e.preventDefault();
    // console.log(input);
    setInput("");
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at .. </p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

      </div>

      <div className="chat__body">
        {messages.map((message) => (
          <p className={`chat__message ${true && "chat__reciever"}`}>

            {message.message}

            <span className="chat__timestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>

      <div  className="chat__footer">
        <InsertEmoticon />
          <form>
            <input value={input}
                   onChange={e =>
                   setInput(e.target.value)}
                   placeholder="Type a message"
                   type="text"
            />
            <button onClick={SendMessage} type="submit">Send a Message</button>
          </form>
        <Mic />
      </div>
    </div>
  )
}

export default Chat;
