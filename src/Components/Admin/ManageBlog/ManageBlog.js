import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';

const ManageBlog = () => {
    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])


    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <AdminNav></AdminNav>
            </div>
            <div className="col-md-9">
                <div className="container">
                    <h2 className="text-center p-5">Manage My Blogs</h2>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Blog Title</th>
                                <th scope="col">Blog Image</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs.map(blog => 
                                <tr>
                                    <th scope="row">{blog.title}</th>
                                    <td><img src={blog.imageURL} class="w-50" alt="..." /></td>
                                    <td><button className="btn btn-danger" onClick={ () => deleteProduct(`${blog._id}`)}>Delete</button> </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBlog;