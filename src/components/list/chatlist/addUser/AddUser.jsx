import React from 'react'
import "./adduser.css"
import { IoClose } from "react-icons/io5";
import { db } from "../../../../lib/firebase";
import {
    arrayUnion,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    where,
} from "firebase/firestore";
import { useState } from "react";
import { useUserStore } from "../../../../lib/userStore";

const AddUser = ({ setAddMode, addMode }) => {
    const [user, setUser] = useState(null);

    const { currentUser } = useUserStore();

    const handleSearch = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");

        try {
            const userRef = collection(db, "users");

            const q = query(userRef, where("username", "==", username));

            const querySnapShot = await getDocs(q);

            if (!querySnapShot.empty) {
                setUser(querySnapShot.docs[0].data());
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleAdd = async () => {
        const chatRef = collection(db, "chats");
        const userChatsRef = collection(db, "userchats");

        try {
            const newChatRef = doc(chatRef);

            await setDoc(newChatRef, {
                createdAt: serverTimestamp(),
                messages: [],
            });

            await updateDoc(doc(userChatsRef, user.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: currentUser.id,
                    updatedAt: Date.now(),
                }),
            });

            await updateDoc(doc(userChatsRef, currentUser.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: user.id,
                    updatedAt: Date.now(),
                }),
            });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className='AddUser'>
            <div className="AddUser-close">
                <IoClose size={30} onClick={() => setAddMode(!addMode)} />
            </div>
            <div className="AddUser-inner-div">
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder="Username" name="username" />
                    <button>Search</button>
                </form>
                {user && (
                    <div className="formSearched-user">
                        <div className="detail">
                            <img src={user.avatar || "./avatar.png"} alt="" />
                            <span>{user.username}</span>
                        </div>
                        <button onClick={handleAdd}>Add User</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AddUser