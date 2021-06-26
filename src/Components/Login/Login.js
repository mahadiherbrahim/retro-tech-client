import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import firebaseConfig from "./firebase.config"
import "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const location = useLocation();
    const history = useHistory()

    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [newUser, setNewUser] = useState(true);

    const [user, setUser] = useState({
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
    })

    //Custom Authentication
    const handleValidation = (e) => {

        let userValid;
        if (e.target.name === "email") {
            userValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === "password") {
            const validPasswordLength = e.target.value.length > 6
            const validPasswordChar = /\d{1}/.test(e.target.value)
            userValid = validPasswordLength && validPasswordChar
        }
        if (e.target.name === "confirmPassword") {
            const validPasswordLength = e.target.value.length > 6
            const validPasswordChar = /\d{1}/.test(e.target.value)
            userValid = validPasswordLength && validPasswordChar
        }

        // if(e.target.name === "name"){
        //     userValid = /^[a-zA-Z\s]*$/.test(e.target.value)
        // }

        if (userValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
        }
    }
    const handleRegistration = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = res.user
                    newUserInfo.success = true
                    newUserInfo.error = ''
                    setLoggedInUser(newUserInfo)
                    setUser(newUserInfo)
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = {}
                    newUserInfo.success = false
                    newUserInfo.error = error.message
                    setUser(newUserInfo)
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = res.user
                    newUserInfo.success = true
                    newUserInfo.error = ''
                    setLoggedInUser(newUserInfo)
                    setUser(newUserInfo)
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = {}
                    newUserInfo.success = false
                    newUserInfo.error = error.message
                    setUser(newUserInfo)
                    console.log(error.message);
                });
        }
        e.preventDefault()
    }
    const updateProfileInfo = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(function (res) {
            console.log(res, 'UserName Update');
        }).catch(function (error) {
            console.log(error, 'UserName Not Update');
        });
    }
    //Google Authentication
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSign = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const googleUserData = {
                    name: displayName,
                    email: email,
                    success: true,
                    error: ''
                }
                setUser(googleUserData)
                setLoggedInUser(googleUserData)
                history.replace(from);
            }).catch((error) => {
                const newUserInfo = {}
                newUserInfo.success = false
                newUserInfo.error = error.message
                setUser(newUserInfo)
                console.log(error.message);
            });
    }


    return (
        <div class="row" className="text-center p-5">
            <div className="col-md-6 offset-3">
                <form action="#" className="form-style" onSubmit={handleRegistration} >
                    <h3>{newUser ? 'Sign Up' : 'Sign In'}</h3>
                    {
                        newUser &&
                        <div className="mb-3">
                            <input type="text" required className="form-control" onBlur={handleValidation} name="name" placeholder="Your Name" />
                        </div>
                    }
                    <div className="mb-3">
                        <input type="email" required className="form-control" name="email" onBlur={handleValidation} placeholder="Your Email" />
                    </div>
                    <div className="mb-3">
                        <input type="password" required className="form-control" name="password" id="password" onBlur={handleValidation} placeholder="Your Password" />
                    </div>
                    {
                        newUser &&
                        <div className="mb-3">
                            <input type="password" required className="form-control" name="confirmPassword" id="confirmPassword" onBlur={handleValidation} placeholder="Confirm Password" />
                        </div>
                    }
                    <button type="submit" className="btn btn-primary btn-block">{newUser ? 'Sign Up' : 'Sign In'}</button>
                    <p className="text-center m-2">Already Have A Account ?
                        <input type="checkbox" name="newUser" id="newUser" onChange={() => setNewUser(!newUser)} />
                        <label htmlFor="newUser">Login</label>
                    </p>
                </form>
                <button onClick={handleGoogleSign} className="btn btn-outline-primary  btn-block">Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;