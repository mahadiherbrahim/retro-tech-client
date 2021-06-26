import React from 'react';
import AdminNav from '../AdminNav/AdminNav';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddPost = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [imageURL, setImageURL] = useState('')

    const history = useHistory()

    const onSubmit = data => {
        const postData = {
            title: data.title,
            description: data.description,
            imageURL: imageURL,
        }

        console.log(postData);

        const url = `https://limitless-springs-68209.herokuapp.com/addBlog`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
            .then(res => {
                console.log(res)
                alert('Your Blog Published')
            })
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '410b5fd5e1b122c413f230644ed7ca8f');
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <AdminNav></AdminNav>
            </div>
            <div className="col-md-9">
                <div className="container">
                    <h3 className="text-center p-5">Add Post</h3>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input  {...register("title")} className="form-control" placeholder="Blog Title" /><br />
                                <textarea {...register("description")} className="form-control" placeholder="Blog Description" /><br />
                                <input type="file" onChange={handleImageUpload} className="form-control" /><br />
                                <input type="submit" value="Add Blog" className="btn btn-info" />
                            </form>

                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;