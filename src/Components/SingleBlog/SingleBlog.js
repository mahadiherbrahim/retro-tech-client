import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {

    const { blogId } = useParams();
    const [blogDetails, setBlogDetails] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
            .then(res => res.json())
            .then(data => setBlogDetails(data));
    }, [])

    return (
        <div className="row">
            <div className="col-md-6 offset-3">
                <h2 className="text-center text-primary p-2">{blogDetails.title}</h2>
                <p>{blogDetails.body}</p>
            </div>
        </div>
    );
};

export default SingleBlog;