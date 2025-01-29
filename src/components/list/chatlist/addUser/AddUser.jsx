import React from 'react'
import "./adduser.css"
import { IoClose } from "react-icons/io5";


const AddUser = ({ setAddMode, addMode }) => {
    return (
        <div className='AddUser'>
            <div className="AddUser-close">
                <IoClose size={30} onClick={() => setAddMode(!addMode)} />
            </div>
            <div className="AddUser-inner-div">
                <form>
                    <input type="text" placeholder='Username' name='usernanme' />
                    <button>search</button>
                </form>
                <div className="formSearched-user">
                    <div className="detail">
                        <img src="./avatar.png" alt="" />
                        <span>User Name</span>
                    </div>
                    <button>Add User</button>
                </div>
            </div>
        </div>
    )
}

export default AddUser