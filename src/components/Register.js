import React, { useState, useEffect } from 'react';
import '../styles/Register.css';
import { useNavigate } from 'react-router';

const Register = () => {

    const [user, setUser] = useState({Name: '', Email: '', Password: '', ConfirmPassword: ''});
    const [change, setChange] = useState(false);
    const [passwordChange, setPasswordChange] = useState(false);
    const [confirmPasswordChange, setConfirmPasswordChange] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e)=>{

        if(e.target.name==='Name')
            setChange(true);

        if(e.target.name==='Password')
            setPasswordChange(true);

        if(e.target.name==='ConfirmPassword')
            setConfirmPasswordChange(true);

        setUser({...user,[e.target.name]: e.target.value});
    }

    const handleRegister = async (e)=>{

        e.preventDefault();

        try {
            
            const response = await fetch('http://www.localhost:2000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const resposeData = await response.json();

            if(resposeData.success) {

                localStorage.setItem('auth-Token', resposeData.authToken);
                navigate("/");
            }
            else {

                navigate('/register');

                if(resposeData.error.includes("The Email is already registered!")) {

                    setEmailError(true);
                }
                else {
                    setEmailError(false);
                }
            }

        } catch (error) {
            
            navigate('/register');
        }

    }

    useEffect(()=>{

        document.body.style.overflowY = 'hidden';
    }, []);

  return (
    <div className="register-container">
        <header className="register-header">
            <h2><span><i className="fa-solid fa-user-plus"></i></span> Register to Make Catalogue of Your Favourite Movies</h2>
        </header>
        <form className="register-body">
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" id="Name" placeholder='Input Your Name' required autoComplete='on' onChange={handleChange} value={user.Name}/>
            {((user.Name.length<2 || user.Name.length>50) && change ) && <p className="error-msg">The Name should contains a minimum of 2 characters and a maximum of 50 characters!</p>}
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" id="Email" placeholder='Input Your Email' autoComplete='on' required onChange={handleChange} value={user.Email}/>
            { emailError && <p className="error-msg">This Email is already registered!</p>}
            <label htmlFor="Password">Password</label>
            <input type="password" name="Password" id="Password" placeholder='Create Your Password' required autoComplete='off' onChange={handleChange} value={user.Password}/>
            {((user.Password.length<2 || user.Password.length>14) && passwordChange ) && <p className="error-msg">The Password should contains 2-14 characters!</p>}
            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input type="password" name="ConfirmPassword" id="ConfirmPassword"placeholder='Repeat Your Password' required autoComplete='off' onChange={handleChange} value={user.ConfirmPassword}/>
            {(!(user.Password === user.ConfirmPassword) && confirmPasswordChange ) && <p className="error-msg">The Password and Confirm Password must be same to continue!</p>}
            <button disabled={(user.Name.length<2 || user.Name.length>50 || user.Password.length<2 || user.Password.length>14 || !(user.Password===user.ConfirmPassword))?true:false} type="submit" className="register-btn" onClick={handleRegister}>Register</button>
        </form>
    </div>
  )
}

export default Register;