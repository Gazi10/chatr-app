import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Chat.css";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import {UilSetting} from '@iconscout/react-unicons'
import axios from "axios";
import { getInbox } from "../../api/ChatRequests";
import ChatBox from "../../components/ChatBox.jsx/ChatBox";
import Conversation from "../../components/Conversation/Conversation";

export const Chat = () => {
  const user = useSelector((state) => state.user.value);
  const [loading, setLoading] = useState(true)
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChats] = useState(null);

  useEffect(() => {
    const getChats = async () => {
      try {
        const data = await getInbox(user.email);
        setChats(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user.email]);

  const inbox = Object.keys(chats);

  return (
    <div className="Chat">
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Inbox</h2>
          <div className="Chat-list">
            {loading ? 'Loading...' : inbox.map((i) => {
              return true ?
             (
                <div onClick={() => setCurrentChats(i)}>
                  <Conversation
                    list={i}
                    data={chats}
                    currentUser={user}
                  ></Conversation>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
      <div className="Right-side-chat"
      style={{marginTop: "3.3rem"}}
      >
        <ChatBox chat={currentChat} data={chats} currentUser = {user}/>
      </div>
    </div>
  );
};

export default Chat;
