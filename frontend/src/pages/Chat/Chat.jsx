import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'
import "./Chat.css";
import ScrollToBottom from "react-scroll-to-bottom";
// import { socket } from "../../../socket/index";
// import socket from 'socket.io'
// import { socket } from "../../../utils/socket";


import axios from 'axios';




function Chat() {
  const student=JSON.parse(localStorage.getItem('student'))
  // console.log("kk",student);
  const courseId='6317393c6ab7f825684c151b'
  // console.log("iiiii",courseId);
  const  user=JSON.parse(localStorage.getItem('user'))
  // console.log("kk",user);

  let location = useLocation();

  const [messages, setmessages] = useState([])
  const [newMessage, setNewMessage] = useState("");
  const [socketMessage,setSocketMessage] = useState([])

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };
  useEffect(() => {
    async function getChats() {
      return await axios.get(`/api/users/chats/${courseId}`).then((response) => {
        // console.log(response.data, "Responseii");
        console.log( response.data, "Responseii");
        setmessages(response.data);
      });
    }
    getChats();
  }, [location]);

  // useEffect(() => {
  //   var room = courseId;
  //   socket.emit("room", room);
  // }, []);

  // useEffect(() => {
  //    socket.on("message", function (data) {
  //      setSocketMessage(data);
  //    });
  // }, [socket])
  


  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      chatId: courseId,
      senderId: student._id,
      senderName: student.name,
      text: newMessage,
    };

    //send message to data base
    try {
      const { data } = await axios.post("/api/users/createchat", message);
      // console.log("iiiioookk",data);

      setmessages([...messages,data])
      console.log("ookk", messages);
      

      setNewMessage("");
      // socket.emit("sendMessage", message,courseId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    
      <div className="ChatBox-container">
        
        <>
          <div className="chat-header">
            <div className="follower">
              <div>
                <div className="name" style={{ fontSize: "0.8rem" }}>
                  <span>
                  </span>
                </div>
              </div>
            </div>
            <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
          </div>
          <ScrollToBottom>
            <div className="chat-body">
              {messages.map((msg) => 
                <>
                  <div
                    className={
                      msg.senderId === student._id ? "message own" : "message"
                    }
                  >
                    {msg.senderName}
                    <span>{msg.text}</span>
                    <span>{format(msg.createdAt)}</span>
                    
                  </div>
                </>
              )}
            </div>
          </ScrollToBottom>
          <div className="chat-sender">
            <div>+</div>
            <InputEmoji value={newMessage} onChange={handleChange} />
            <div className="send-button button" onClick={handleSend}>
              Send
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default Chat
