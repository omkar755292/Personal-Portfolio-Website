import React from 'react'

const BlogCard = (props) => {
    return (
        <div className='blog-post' >
            <div>
                <article className='blog-article' key={props.blog.id}>
                    <h2>{props.blog.title}</h2>
                    <p className='blog-content ' style={{ height: "150px" }}>{props.blog.content}</p>
                </article>
            </div>
            <button className='blog-button'>view</button>
            <span className='post-date'>Posted on:{props.blog.updatedAt} by {props.blog.author}</span>
        </div>
    )
}

export default BlogCard