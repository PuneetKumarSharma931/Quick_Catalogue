import React, { useState } from 'react';
import '../styles/Register.css';

const Login = () => {

    const [user, setUser] = useState({Email: '', Password: ''});

    const handleChange = (e)=>{

        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleLogin = (e)=>{

        console.log("Logged in!");
    }

  return (
    <div className="register-container" style={{marginTop: '200px'}}>
        <header className="register-header">
            <h2><span><i className="fa-solid fa-user"></i></span> Login to Continue Making Catalogue of Your Favourate Movies</h2>
        </header>
        <form className="register-body">
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" id="Email" placeholder='Input Your Email' autoComplete='on' required onChange={handleChange} value={user.Email}/>
            <label htmlFor="Password">Password</label>
            <input type="password" name="Password" id="Password" placeholder='Input Your Password' required autoComplete='off' onChange={handleChange} value={user.Password}/>
            <button type="submit" className="register-btn" onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}

export default Login;