import React from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from "@material-ui/core";

import SearchOutLined from '@material-ui/icons/SearchOutlined';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import SideBarChat from './SideBarChat.js';

function Sidebar(){
  return(
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
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
        <SideBarChat />
        <SideBarChat />
      </div>
    </div>
  )
}

export default Sidebar;
