import React from 'react';

const LargeCorporation = ({ setLargeCorporation, setTakingSurvey, setContactedLargeCorp, setLoginSuccess }) => {

    const handleLargeCorporationYes = () => {
        setLargeCorporation(false);
        setTakingSurvey(true);
        setLoginSuccess(false);
    }

    const handleLargeCorporationNo = () => {
        setLargeCorporation(false);
        setContactedLargeCorp(true);
        setLoginSuccess(false);
    }
    return (
        <div className='card'>
            <h1>Is it Large Corporation?</h1>
            <div className="btnContainer">
                <button className='gradient-button' onClick={handleLargeCorporationYes}>Yes</button>
                <button className='gradient-button' onClick={handleLargeCorporationNo}>No</button>
            </div>
        </div>
    );
};

export default LargeCorporation;