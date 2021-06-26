import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Blogs.css'
const Blogs = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    const history = useHistory();

    return (
        <section class="service-section" id="services">
            <div class="container-fluid">
                <div class="row">
                    {
                        posts.map(post =>
                            <div class="col-md-6 col-lg-4 col-sm-6 col-12">
                                <div class="card service-card">
                                    <img src={post.imageURL} class="card-img-top mx-auto" alt="..." onClick={() => (history.push(`singleBlog/${post._id}`))} />
                                    <div class="card-body">
                                        <h2 onClick={() => (history.push(`singleBlog/${post._id}`))}>{post.title}</h2>
                                        {/* <p class="card-text">{post.description}</p> */}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>

    );
};

export default Blogs;