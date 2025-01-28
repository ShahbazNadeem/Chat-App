import React from 'react'
import "./detail.css"

const Detail = () => {
  return (
    <div className='detail'>
      <div className="Detail-user">
        <img src="./avatar.png" alt="userImg" />
        <h2>User Name</h2>
        <p>user description.</p>
      </div>

      <div className="Detail-info">

        <div className="Detail-info-option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="Detail-info-option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="Detail-info-Photos">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="PhotoDetail">
            <div className="photoItem">
              <img src="https://i.pinimg.com/474x/7d/1c/09/7d1c0982b0123dd7df65c67c9da4e774.jpg" alt="" />
              <span>photo_hjdg_121.png</span>
            </div>
            <img src="./download.png" alt="" />
          </div>
          <div className="PhotoDetail">
            <div className="photoItem">
              <img src="https://i.pinimg.com/474x/7d/1c/09/7d1c0982b0123dd7df65c67c9da4e774.jpg" alt="" />
              <span>photo_hjdg_121</span>
            </div>
            <img src="./download.png" alt="" />
          </div>
          
        </div>

        <div className="Detail-info-option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>

        <button className='Detail-info-deletee-btn'>Block This User</button>
        <button className='Detail-info-logout-btn'>LogOut</button>

      </div>
    </div>
  )
}

export default Detail