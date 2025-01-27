import React from 'react'
import "./userinfo.css"

const UserInfo = () => {
  return (
    <div className='UserInfo'>
      <div className="user">
        <figure><img src='./avatar.png' /></figure>
        <h2>Jhon Doe</h2>
      </div>

      <div className="icons">
        <figure><img src='./more.png' /></figure>
        <figure><img src='./video.png' /></figure>
        <figure><img src='./edit.png' /></figure>
      </div>
    </div>
  )
}

export default UserInfo