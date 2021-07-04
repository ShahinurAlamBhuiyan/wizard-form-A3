import React from 'react';

const Login = ({ setLogin, setFacebookLogin, setEmailLogin }) => {
    const handleYes = () => {
        setLogin(false);
        setFacebookLogin(true);
    }
    const handleNo = () => {
        setLogin(false);
        setEmailLogin(true);
    }
    return (
        <div className="card">
            <h1>Do you want to Login with facebook?</h1>
            <div className="btnContainer">
                <button className='gradient-button' onClick={handleYes}>yes</button>
                <button className='gradient-button' onClick={handleNo}>no</button>
            </div>
        </div>
    );
};

export default Login;