import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'


const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setBlogs(response.data.slice(0, 10)); 
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>Blog Dashboard</h1>
      <div className="cardContainer">
        {blogs.map((blog) => (
          <div key={blog.id} className="card">
            <h3>{blog.title}</h3>
            <p>ID: {blog.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
