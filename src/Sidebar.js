import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from "@material-ui/core";

import SearchOutLined from '@material-ui/icons/SearchOutlined';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { useStateValue } from './StateProvider';
import SideBarChat from './SideBarChat.js';
import db from './firebase.js';

function Sidebar(){

  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection('rooms').onSnapshot(snapshot => (
      setRooms(snapshot.docs.map(doc => ({
        id : doc.id,
        data : doc.data()
      })))
    ))
  }, [])

  return(
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL}/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchcontainer">
          <SearchOutLined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SideBarChat addNewChat/>
        {rooms.map(room => (
          <SideBarChat
              key={room.id}
              id={room.id}
              name={room.data.Name}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar;
