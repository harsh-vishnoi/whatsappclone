import React, { useEffect, useState } from 'react';
import './SideBarChat.css';
import { Link } from "react-router-dom";
import { Avatar } from '@material-ui/core';
import db from "./firebase";

function SideBarChat({ id, name, addNewChat }){
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if(id){
      db.collection('rooms')
        .doc(id)
        .collection('message').orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()))
        });
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name ");

    if(roomName){
        // Do something ...
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
    <div className="SideBarChat">

      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className="SideBarChat__info">
        <h2>{name}</h2>
        <p>{messages[0]?.message}</p>
      </div>

    </div>
    </Link>
  ) : (

    <div onclick={createChat} className="SideBarChat">
      <h2>Add new Chat</h2>
    </div>
  )
}

export default SideBarChat;
