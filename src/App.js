import './App.css';
import Catalogue from './components/Catalogue';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import MovieDetails from './components/MovieDetails';
import { useContext } from 'react';
import MovieContext from './context/MovieContext';

function App() {

  const { id } = useContext(MovieContext);

  return (
    <div className="quick-catalogue">
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Catalogue />} />
            <Route exact path={id.length===0?sessionStorage.getItem('id'):id} element={<MovieDetails />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
