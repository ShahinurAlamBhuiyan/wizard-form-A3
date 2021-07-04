import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../secret/firebase.config'; // git ignore it for privacy.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const LoginComponent = ({ setLoginSuccess, setFacebookLogin, setEmailLogin, emailLogin, facebookLogin }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }



    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                setFacebookLogin(false);
                setEmailLogin(false);
                setLoginSuccess(true);
            }).catch(function (error) {
                console.log(error.errorMessage)
            });
    }


    const handleFbSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(fbProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const loggedUser = { name: displayName, email, img: photoURL }
                sessionStorage.setItem('user', JSON.stringify(loggedUser));
                storeAuthToken();
                setLoggedInUser(loggedUser);
            })
            .catch((error) => {
                console.log(error)
            });
    }





    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNum = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNum;
        }
        if (isFieldValid) {
            const newUserInfo = { ...loggedInUser }
            newUserInfo[event.target.name] = event.target.value;
            setLoggedInUser(newUserInfo)
        }
        else if (!isFieldValid) {
            const newUserInfo = { ...loggedInUser }
            newUserInfo.error = 'check your email & password'
            setLoggedInUser(newUserInfo)
        }
    }




    const handleSubmit = (event) => {
        if (newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then((userCredential) => {
                    const newUserInfo = { ...loggedInUser }
                    setLoggedInUser(newUserInfo);
                    updateUserName(loggedInUser.name);
                    sessionStorage.setItem('user', JSON.stringify(newUserInfo))
                    storeAuthToken();
                })
                .catch((error) => {
                    console.log(error)
                });
        }

        if (!newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    const newUserInfo = { ...loggedInUser }
                    setLoggedInUser(newUserInfo);
                    sessionStorage.setItem('user', JSON.stringify(newUserInfo))
                    storeAuthToken();
                })
                .catch(error => {
                    console.log(error)
                });
        }
        event.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('user name updated successfully');
        }).catch(function (error) {
            console.log(error);
        });
    }


    console.log(loggedInUser)


    return (
        <div>
            {facebookLogin && <button  className='gradient-button fbBtn' onClick={handleFbSignIn}> <FontAwesomeIcon icon={faFacebook} />&nbsp;&nbsp;Facebook Sign In</button>}

            {emailLogin &&
                <div className="card">
                    <form onSubmit={handleSubmit} action="">
                        {
                            newUser && <input className='form-control' type="text" onBlur={handleBlur} name="name" placeholder='Your Name' />
                        }
                        <br />
                        <input className='form-control' type="text" onBlur={handleBlur} name="email" placeholder='Your Email' required /><br />
                        <input className='form-control' type="password" onBlur={handleBlur} name="password" placeholder='Your Password' required />
                        <br />
                        <div className='d-flex justify-content-center'><input type="submit" className='btn btn-primary' value={newUser ? 'Sign up' : 'Sign in'} /></div>
                    </form>
                    {
                        !newUser ? <small>Don't have an account ? <strong style={{ fontSize: '1rem', cursor: 'pointer' }} onClick={() => setNewUser(!newUser)}>Create an account</strong> </small> : <small>Already has an account ? <strong style={{ fontSize: '1rem', cursor: 'pointer' }} onClick={() => setNewUser(!newUser)}>Login</strong> </small>
                    }
                </div>
            }
        </div>
    );

};
export default LoginComponent;
