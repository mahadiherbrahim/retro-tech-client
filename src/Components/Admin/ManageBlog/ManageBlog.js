import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://limitless-springs-68209.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    const deleteProduct = (id) => {
        fetch(`https://limitless-springs-68209.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
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
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs.map(blog =>
                                    <tr>
                                        <th scope="row">{blog.title}</th>
                                        <td><button className="btn btn-danger" onClick={() => deleteProduct(`${blog._id}`)}>Delete</button> </td>
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