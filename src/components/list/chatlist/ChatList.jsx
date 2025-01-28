import React, { useState } from 'react'
import "./chatlist.css"
import AddUser from './addUser/AddUser'

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
    <div className='ChatList'>
      <div className="search">
        <div className="searchbar">
          <figure><img src='./search.png' alt='searchBar' /></figure>
          <input type="text" placeholder='Search' />
        </div>
        <img src={addMode ? "./minus.png" : './plus.png'} className='add' alt='mode' onClick={() => setAddMode(!addMode)} />
      </div>

      <div className="item">
        <img src='./avatar.png' alt='userImg'/>
        <div className="text">
          <span>Jane Doe</span>
          <p>Helo</p>
        </div>
      </div>
      <div className="item">
        <img src='./avatar.png' alt='userImg'/>
        <div className="text">
          <span>Jane Doe</span>
          <p>Helo</p>
        </div>
      </div>
      <div className="item">
        <img src='./avatar.png' alt='userImg'/>
        <div className="text">
          <span>Jane Doe</span>
          <p>Helo</p>
        </div>
      </div>
      <div className="item">
        <img src='./avatar.png' alt='userImg'/>
        <div className="text">
          <span>Jane Doe</span>
          <p>Helo</p>
        </div>
      </div>
      <div className="item">
        <img src='./avatar.png' alt='userImg'/>
        <div className="text">
          <span>Jane Doe</span>
          <p>Helo</p>
        </div>
      </div>
      <div className="item">
        <img src='./avatar.png' alt='userImg'/>
        <div className="text">
          <span>Jane Doe</span>
          <p>Helo</p>
        </div>
      </div>
      <div className="item">
        <img src='./avatar.png' alt='userImg'/>
        <div className="text">
          <span>Jane Doe</span>
          <p>Helo</p>
        </div>
      </div>
      <div className="item">
        <img src='./avatar.png' alt='userImg'/>
        <div className="text">
          <span>Jane Doe</span>
          <p>Helo</p>
        </div>
      </div>
      <div className="item">
        <img src='./avatar.png' alt='userImg'/>
        <div className="text">
          <span>Jane Doe</span>
          <p>Helo</p>
        </div>
      </div>
      <div className="item">
        <img src='./avatar.png' alt='userImg'/>
        <div className="text">
          <span>Jane Doe</span>
          <p>Helo</p>
        </div>
      </div>
      {addMode && <AddUser setAddMode={setAddMode} addMode={addMode}/>}
    </div>
  )
}

export default ChatList