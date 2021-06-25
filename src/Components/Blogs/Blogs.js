import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Blogs = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    const history = useHistory();

    return (
        <div class="row">
            {
                posts.map(post =>
                    <div class="col-md-3">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{post.title}</h5>
                                <p class="card-text">{post.body}</p>
                                <button onClick={() => (history.push(`singleBlog/${post.id}`))}>See Details</button>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>

    );
};

export default Blogs;