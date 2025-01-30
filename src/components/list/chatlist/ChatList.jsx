import React, { useEffect, useState } from 'react'
import "./chatlist.css"
import AddUser from './addUser/AddUser'
import { useUserStore } from './../../../lib/userStore';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  const [chats, setChats] = useState([])
  const { currentUser } = useUserStore()

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
      const items = res.data().chats;

      const promises = items.map(async (item) => {

        const userDocRef = doc(db, "users", item.receiverId);
        const userDocSnap = await getDoc(userDocRef);

        const user = userDocSnap.data();

        return { ...item, user }
      })
      const chatData = Promise.all(promises)

      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
    })

    return () => {
      unsub()
    }
  }, [currentUser.id])
  return (
    <div className='ChatList'>
      <div className="search">
        <div className="searchbar">
          <figure><img src='./search.png' alt='searchBar' /></figure>
          <input type="text" placeholder='Search' />
        </div>
        <img src={addMode ? "./minus.png" : './plus.png'} className='add' alt='mode' onClick={() => setAddMode(!addMode)} />
      </div>
      {chats?.map((chat) => (
        <div className="item" id={chat.id}>
          <img src='./avatar.png' alt='userImg' />
          <div className="text">
            <span>Jane Doe</span>
            <p>Helo</p>
          </div>
        </div>
      ))}


      {addMode && <AddUser setAddMode={setAddMode} addMode={addMode} />}
    </div>
  )
}

export default ChatList