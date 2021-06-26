import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './SingleBlog.css'
const SingleBlog = () => {

    const { id } = useParams();
    const [blogDetails, setBlogDetails] = useState([])
    useEffect(() => {
        fetch(`https://limitless-springs-68209.herokuapp.com/singleBlog/${id}`)
            .then(res => res.json())
            .then(data => setBlogDetails(data[0]));
    }, [])

    return (
        <div className="row single-blog">
            <Header></Header>
            <div className="col-md-6 offset-3 text-center">
                <img className="p-2" src={blogDetails.imageURL} />
                <h1 className="p-2">{blogDetails.title}</h1>
                <p>{blogDetails.description}</p>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default SingleBlog;