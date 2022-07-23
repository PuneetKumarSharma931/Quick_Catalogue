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
        <h2>Quick Catalogue</h2>
        <form action="" method="GET">
            <input type="text" name="title" id="title" placeholder="Search Title" value={title} onChange={handleChange} required />
            <button type="submit" onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </nav>
  )
};

export default Navbar;