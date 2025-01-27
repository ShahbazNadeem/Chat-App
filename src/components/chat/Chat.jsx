import React, { useState } from 'react'
import "./chat.css"
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")
  const handleEmoji = (e) => {
    setText(() => text + e.emoji)
    setOpen(false)
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
        <div className="Chat-center-message">
          <img src="./avatar.png" alt="" />
          <div className="Chat-center-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi. Fuga quos incidunt quisquam eos doloremque ad consectetur laudantium aspernatur ullam saepe sunt doloribus ipsam, accusantium laborum aliquam impedit asperiores.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="Chat-center-message own">
          <div className="Chat-center-text">
          <img src="https://i.pinimg.com/474x/7d/1c/09/7d1c0982b0123dd7df65c67c9da4e774.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi. Fuga quos incidunt quisquam eos doloremque ad consectetur laudantium aspernatur ullam saepe sunt doloribus ipsam, accusantium laborum aliquam impedit asperiores.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="Chat-center-message">
          <img src="./avatar.png" alt="" />
          <div className="Chat-center-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi. Fuga quos incidunt quisquam eos doloremque ad consectetur laudantium aspernatur ullam saepe sunt doloribus ipsam, accusantium laborum aliquam impedit asperiores.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="Chat-center-message own">
          <div className="Chat-center-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi. Fuga quos incidunt quisquam eos doloremque ad consectetur laudantium aspernatur ullam saepe sunt doloribus ipsam, accusantium laborum aliquam impedit asperiores.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="Chat-center-message">
          <img src="./avatar.png" alt="" />
          <div className="Chat-center-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi. Fuga quos incidunt quisquam eos doloremque ad consectetur laudantium aspernatur ullam saepe sunt doloribus ipsam, accusantium laborum aliquam impedit asperiores.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="Chat-center-message own">
          <div className="Chat-center-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi. Fuga quos incidunt quisquam eos doloremque ad consectetur laudantium aspernatur ullam saepe sunt doloribus ipsam, accusantium laborum aliquam impedit asperiores.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="Chat-center-message">
          <img src="./avatar.png" alt="" />
          <div className="Chat-center-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi. Fuga quos incidunt quisquam eos doloremque ad consectetur laudantium aspernatur ullam saepe sunt doloribus ipsam, accusantium laborum aliquam impedit asperiores.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="Chat-center-message own">
          <div className="Chat-center-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi. Fuga quos incidunt quisquam eos doloremque ad consectetur laudantium aspernatur ullam saepe sunt doloribus ipsam, accusantium laborum aliquam impedit asperiores.</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>

      <div className="Chat-bottom">
        <div className="Chat-bottom-icons">
          <img src="./img.png" alt="img" />
          <img src="./camera.png" alt="camera" />
          <img src="./mic.png" alt="mic" />
        </div>
        <input type="text" placeholder='Type a message...' value={text} onChange={(e) => setText(e.target.value)} />
        <div className="Chat-bottom-emoji">
          <img src={open ? "./emoji-close.png":"./emoji.png"} alt="emoji" onClick={() => setOpen(!open)} />
          <div className="emoji-picker-container">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className='Chat-bottom-sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat