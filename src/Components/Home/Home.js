import React from 'react';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css'
const Home = () => {
    return (
        <div className="front-page">
            <Header></Header>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;