import React from 'react'
import BlogCard from '../component/BlogCard'

const Blogs = (props) => {
  const renderblogs = props.blogs.map((blog) => {
    return <BlogCard key={blog.id} blog={blog} />
  });
  return (
    <div className='blog-container'>
      <div>
        {renderblogs}
      </div>
    </div>
  )
}

export default Blogs