import React, { useContext, useState } from 'react';
import '../styles/Navbar.css';
import MovieContext from '../context/MovieContext';
import { useNavigate } from 'react-router';

const Navbar = () => {

  const { fetchMovies } = useContext(MovieContext);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleChange = (e)=>{

    setTitle(e.target.value);

  }

  const handleSearch = (e)=>{

    navigate("/");
    e.preventDefault();

    setTimeout(()=>{
      
    fetchMovies(title);

    },0);

  }

  return (
    <nav>
      <div className="Nav-Left">
        <h2 style={{cursor: "pointer"}} onClick={()=>{navigate("/")}}>Quick Catalogue</h2>
        <h3 style={{marginLeft: "35px", cursor: "pointer"}} onClick={()=>{navigate("/")}}>Home</h3>
      </div>
      <div className="Nav-Right">
          <form action="" method="GET">
              <input type="text" name="title" id="title" placeholder="Search Title" value={title} onChange={handleChange} required />
              <button type="submit" onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <button className="register-button" onClick={()=>{navigate("/register")}}><span><i className="fa-solid fa-user-plus"></i></span> Register</button>
          <button className="login-button" onClick={()=>{navigate("/login")}}><span><i className="fa-solid fa-user"></i></span> Login</button>
      </div>
    </nav>
  )
};

export default Navbar;