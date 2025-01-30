import React from 'react'
import "./userinfo.css"
import { useUserStore } from './../../../lib/userStore';

const UserInfo = () => {
  const { currentUser } = useUserStore();
  return (
    <div className='UserInfo'>
      <div className="user">
      <img src={currentUser.avatar || "./avatar.png"} alt="" />
      <h2>{currentUser.username}</h2>
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