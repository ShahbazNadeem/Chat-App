import React, { useState, useRef, useEffect } from 'react'
import "./chat.css"
import EmojiPicker from 'emoji-picker-react'
import { arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import { useChatStore } from '../../lib/chatStore'
import { useUserStore } from '../../lib/userStore'

const Chat = () => {
  const [open, setOpen] = useState(false)
  const [chat, setChat] = useState();
  const [text, setText] = useState("")
  const endRef = useRef(null)
  const { currentUser } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [])

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub()
    }
  }, [chatId])
  const handleEmoji = (e) => {
    setText(() => text + e.emoji)
    setOpen(false)
  }

  const handleSend = async () => {
    if (text === "") return;

    try {
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
        })
      })
    } catch (error) {
      console.log(error)

    }

  }
  return (
    <div className='Chat'>
      <div className="Chat-top">
        <div className="Chat-top-user">
          <figure><img src="./avatar.png" alt="userImg" /></figure>
          <div className="Chat-top-text">
            <span>User Name</span>
            <p>Some Description</p>
          </div>
        </div>
        <div className="Chat-top-icons">
          <img src="./phone.png" alt="phone" />
          <img src="./video.png" alt="video" />
          <img src="./info.png" alt="info" />
        </div>
      </div>

      <div className="Chat-center">
        {chat?.messages?.map((message) => {
          <div className="Chat-center-message own" key={message?.createdAt}>
            <div className="Chat-center-text">
              {message.img && <img src={message.img} alt="img" />}
              <p>{message.text}</p>
              {/* <span>1 min ago</span> */}
            </div>
          </div>
        })
        }

        <div className="" ref={endRef}></div>

      </div>

      <div className="Chat-bottom">
        <div className="Chat-bottom-icons">
          <img src="./img.png" alt="img" />
          <img src="./camera.png" alt="camera" />
          <img src="./mic.png" alt="mic" />
        </div>
        <input type="text" placeholder='Type a message...' value={text} onChange={(e) => setText(e.target.value)} />
        <div className="Chat-bottom-emoji">
          <img src={open ? "./emoji-close.png" : "./emoji.png"} alt="emoji" onClick={() => setOpen(!open)} />
          <div className="emoji-picker-container">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className='Chat-bottom-sendButton' onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Chat