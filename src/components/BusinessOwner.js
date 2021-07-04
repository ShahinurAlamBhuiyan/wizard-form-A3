import React from 'react';

const BusinessOwner = ({ setBusinessOwner, setLocatedInUS, setLogin }) => {

    const handleBusinessYes = () => {
        setBusinessOwner(false);
        setLocatedInUS(true);
    }

    const handleBusinessNo = () => {
        setBusinessOwner(false);
        setLogin(true)
    }
    return (
        <div className="card">
            <h1>Are you a business owner?</h1>
            <div className='btnContainer'>
                <button className='gradient-button' onClick={handleBusinessYes}>Yes</button>

                <button className='gradient-button' onClick={handleBusinessNo}>No</button>

            </div>
        </div>
    );
};

export default BusinessOwner;