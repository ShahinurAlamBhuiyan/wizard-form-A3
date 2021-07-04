import React from 'react';

const TakingSurvey = ({ setTakingSurvey, setLargeCorpoSignForm }) => {

    const handleTakingSurveyYes = () => {
        setTakingSurvey(false);
        setLargeCorpoSignForm(true)
    }

    const handleTakingSurveyNo = () => {
        setTakingSurvey(false)
        setLargeCorpoSignForm(true)
    }
    return (
        <div className="card">
            <h1>Interested in taking survey ?</h1>
            <div className="btnContainer">
                <button className='gradient-button' onClick={handleTakingSurveyYes}>yes</button>
                <button className='gradient-button' onClick={handleTakingSurveyNo}>no</button>
            </div>
        </div>
    );
};

export default TakingSurvey;