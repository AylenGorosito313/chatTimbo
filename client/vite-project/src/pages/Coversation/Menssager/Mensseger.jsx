import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import style from "./mensseger.module.css";
import Conversation from "../Conversations/Conversation";
import Message from "../Message/Message";
import Send_Icon from "./svgs/Send_Icon";
import ChatOnline from "../ChatOnline/ChatOnline";
import axios from "axios";
import { io } from "socket.io-client";

// const socket = io.connect("http://localhost:8900");
export default function Mensseger() {
  const { conv } = useSelector((state) => state.reducer);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState([]);
  
  const socket = useRef();
  const scrollRef = useRef();
  const Id = localStorage.getItem("id");



  useEffect(() => {
    socket.current = io("http://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt:""
      });
    });
  }, [currentChat.length]);

  useEffect(() => {
    socket.current.emit("addUser", Id);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [Id]);

  useEffect(() => {

    arrivalMessage &&
      currentChat?.members?.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    setConversation(conv);
  }, [conv]);

  useEffect(() => {
    const MessagesGET = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/messages/${currentChat?._id}`
      );
      setMessages(res.data);
    };
    MessagesGET();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageARR = {
      sender: Id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    console.log(newMessage);
    const receiverId = currentChat.members.find((member) => member !== Id);

    socket.current.emit("sendMessage", {
      senderId: Id,
      receiverId,
      text: newMessage,
    });

    try {
      let res = await axios({
        method: "POST",
        data: messageARR,
        url: `http://localhost:3001/api/messages`,
      });
      console.log(res.data)
      setMessages([...messages, res.data]);
      // setNewMessage("");
    
    } catch (err) {
      console.log(err);
    }

 
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={style.mensseger}>
      {/* < Nav/> */}
      <div className={style.chatMenu}>
        <div className={style.chatMenuWrapper}>
          <input placeholder="search friends" className={style.chatMenuInput} />
          {conversation &&
            conversation.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversations={c} />
              </div>
            ))}
        </div>
      </div>
      <div className={style.chatBox}>
        <div className={style.chatBoxWrapper}>
          {currentChat ? (
            <>
              <div ref={scrollRef} className={style.chatBoxTop}>
                {messages?.map((m) => (
                  <Message    m={m} own={m.sender === Id} />
                ))}
              </div>
              <div className={style.chatBoxbButtom}>
                <textarea
                  onChange={(e) => setNewMessage(e.target.value)}
                  className={style.chatMessageInput}
                  placeholder="send a message..."
                ></textarea>
                <button onClick={handleSubmit} className={style.submitButtom}>
                  {" "}
                  <Send_Icon />
                </button>
              </div>
            </>
          ) : (
            <span>Welcome to Timbo´s chat 🎉 </span>
          )}
        </div>
      </div>
      <div className={style.chatOnline}>
        <div className={style.chatOnlineWrapper}>
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
        </div>
      </div>
    </div>
  );
}
