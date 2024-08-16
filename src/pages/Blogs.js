import React, { useState, useEffect } from 'react'
import api from '../api/api';
import backtop from '../asset/images/icon-backtotop.png'
import BlogCard from '../component/BlogCard'
import '../asset/css/blogpage.css'

const Blogs = (props) => {

  const [blogs, setBlogs] = useState([]);
  const retriveBlogs = async () => {
    const response = await api.get('/api/blog');
    return response.data;
  }

  useEffect(() => {
    //Get All Blogs
    const getAllBlogs = async () => {
      const allBlogs = await retriveBlogs();
      if (allBlogs) {
        setBlogs(allBlogs);
      }
    }
    getAllBlogs();

  }, [])

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  //Render blogs function
  const renderblogs = blogs.map((blog) => {
    return <BlogCard key={blog.id} blog={blog} />
  });
  
  return (
    <div className='blog-container'>
      {renderblogs}
      <div onClick={scrollToTop} className='back-top'>
        <img src={backtop} alt='back-top'></img>
      </div>
    </div>
  )
}

export default Blogs