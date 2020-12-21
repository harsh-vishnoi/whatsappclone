import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Mic } from '@material-ui/icons';
import './Chat.css';


function Chat(){

  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");

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
          <h3>Room Name</h3>
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
        <p className={`chat__message ${true && "chat__reciever"}`}>

          Hey Guys

          <span className="chat__timestamp">
            3:02
          </span>
        </p>
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
