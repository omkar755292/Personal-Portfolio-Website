import React from 'react'

const BlogCard = (props) => {
    return (
        <div className='blog-post' >
            <article className='blog-article' key={props.blog.id}>
                <h2>{props.blog.title}</h2>
                <p className='blog-content overflow-hidden'style={{height: "200px"}}>{props.blog.content}</p>
                <button className='blog-button'>view</button>
                <span className='post-date'>Posted on:{props.blog.updatedAt} by {props.blog.author}</span>
            </article>
        </div>
    )
}

export default BlogCard