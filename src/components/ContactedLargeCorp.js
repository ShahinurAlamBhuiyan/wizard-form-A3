import React from 'react';

const ContactedLargeCorp = ({ setContactedLargeCorp, setMustContactLargeCorp, setSmallCorpSignUp }) => {

    const handleContactLargeCorpYes = () => {
        setContactedLargeCorp(false);
        setMustContactLargeCorp(true);
    }

    const handleContactLargeCorpNo = () => {
        setContactedLargeCorp(false);
        setSmallCorpSignUp(true);
    }
    return (
        <div className="card" >
            <h1>Contacted with large Corporation ?</h1>
            <div className="btnContainer">
                <button className='gradient-button' onClick={handleContactLargeCorpYes}>yes</button>
                <button className='gradient-button' onClick={handleContactLargeCorpNo}>no</button>
            </div>
        </div>
    );
};

export default ContactedLargeCorp;