import React, { useState } from 'react'
import "./login.css"
import { toast } from 'react-toastify';
import { auth, db } from '../../lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { uploadToCloudinary } from '../../lib/Upload';

const Login = () => {

  const [avatar, setAvatar] = useState({ url: '', file: null });
  const [loading, setLoading] = useState(false);
  const [loadingRegister, setLoadingRegister] = useState(false);

  const handleAvatar = async (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRigester = async (e) => {
    e.preventDefault();
    setLoadingRegister(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      let imgUrl = "";

      if (avatar.file) {
        imgUrl = await uploadToCloudinary(avatar.file); // Pass avatar.file instead of avatar
      }

      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        id: res.user.uid,
        avatar: imgUrl || "", // Ensure avatar is never undefined
        blocked: [],
        password,
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Account created! You can login now!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    finally {
      setLoadingRegister(false);
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {

      await signInWithEmailAndPassword(auth, email, password);
      const lete = signInWithEmailAndPassword
      toast.success("Greate! SignIn Sucessfully")
      console.log(lete)

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div className='Login'>
      <div className="login-item">
        <h2>Welcome Back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder='Email' name='email' />
          <input type="password" placeholder='Pasword' name='password' />
          <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
        </form>
      </div>
      <div className="seprator"></div>
      <div className="login-item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRigester}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="userImg" />
            Upload na Image</label>
          <input type="file" id='file' style={{ display: "none" }} onChange={handleAvatar} />
          <input type="text" placeholder='Username' name='username' />
          <input type="email" placeholder='Email' name='email' />
          <input type="password" placeholder='Password' name='password' />
          <button disabled={loadingRegister}>{loadingRegister ? "Loading" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  )
}

export default Login