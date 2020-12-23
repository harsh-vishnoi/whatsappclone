import React, { useEffect, useState } from 'react';
import './SideBarChat.css';
import { Link } from "react-router-dom";
import { Avatar } from '@material-ui/core';

function SideBarChat({ id, name, addNewChat }){
  const [seed, setSeed] = useState("");

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
        <p>Last Message ...</p>
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
