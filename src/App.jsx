import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddBlog from './assets/components/addBlog';
import Home from './assets/components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={styles.navbar}>
          <div style={styles.logo}>BlogApp</div>
          <div style={styles.links}>
            <Link to="/" style={styles.link}>
              Home
            </Link>
            <Link to="/add-blog" style={styles.link}>
              Add Blog
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: 'MediumSeaGreen', 
    color: 'white',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    borderBottom: '2px solid #f1f1f1',
    fontFamily: '"Times New Roman", Times, serif', 
  },
  logo: {
    fontSize: '28px',
    fontWeight: '700',
    letterSpacing: '3px',
    color: '#ffffff',
    fontFamily: '"Times New Roman", Times, serif', // Setting the font for the logo
  },
  links: {
    display: 'flex',
    gap: '25px',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '500',
    textTransform: 'uppercase',
    transition: 'color 0.3s ease, transform 0.3s ease',
    fontFamily: '"Times New Roman", Times, serif', 
  },
  linkHover: {
    color: '#ffbb33', 
    transform: 'scale(1.1)',
  },
};

export default App;
