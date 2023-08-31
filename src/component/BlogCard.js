import React from 'react'

const BlogCard = (props) => {
    return (
        <div className='blog-post'>
            <article className='blog-article' key={props.blog.id}>
                <h2>{props.blog.title}</h2>
                <p className='blog-content'>{props.blog.content}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vestibulum sagittis turpis at bibendum. Nunc nec bibendum quam.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae; Sed quis tellus at quam faucibus varius.
                    Vivamus rhoncus arcu id neque faucibus, id dapibus nulla dictum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem officia commodi similique
                    totam nemo voluptatibus nihil velit doloremque repudiandae, consequuntur voluptate mollitia,
                    facere corporis autem? Magnam vero voluptatem minima laborum. Nesciunt optio ratione deserunt
                    odit labore! Natus porro exercitationem nisi deleniti suscipit earum aperiam cupiditate! Tempore
                    nobis quae, natus, temporibus nisi sequi, et illo culpa consectetur iure nemo dolorem. Quia quod
                    non sint nobis debitis.
                </p>
                <button className='blog-button'>view</button>
                <span className='post-date'>Posted on: August 15, 2023 by {props.blog.author}</span>
            </article>
        </div>
    )
}

export default BlogCard