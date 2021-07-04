import React, { useState } from 'react';
import BusinessOwner from './BusinessOwner';
import LocatedInUS from './LocatedInUS';
import LargeCorporation from './LargeCorporation';
import TakingSurvey from './TakingSurvey';
import LargeCorpoSignForm from './LargeCorpoSignForm';
import ContactedLargeCorp from './ContactedLargeCorp';
import MustContactLargeCorp from './MustContactLargeCorp';
import SmallCorporationSignUpForm from './SmallCorporationSignUpForm';
import Login from './Login';
import LoginComponent from './Login/LoginComponent';

const Multiform = () => {

    const [businessOwner, setBusinessOwner] = useState(true);
    const [locatedInUS, setLocatedInUS] = useState(false);
    const [largeCorporation, setLargeCorporation] = useState(false);
    const [takingSurvey, setTakingSurvey] = useState(false);
    const [largeCorpoSignForm, setLargeCorpoSignForm] = useState(false);
    const [contactedLargeCorp, setContactedLargeCorp] = useState(false);
    const [mustContactLargeCorp, setMustContactLargeCorp] = useState(false);
    const [smallCorpSignUp, setSmallCorpSignUp] = useState(false);
    const [login, setLogin] = useState(false);
    const [facebookLogin, setFacebookLogin] = useState(false);
    const [emailLogin, setEmailLogin] = useState(false)
    const [loginSuccess, setLoginSuccess] = useState(false)

    return (
        <div className="multiForm">

            {businessOwner && 
                <BusinessOwner 
                    setBusinessOwner={setBusinessOwner} 
                    setLocatedInUS={setLocatedInUS} 
                    setLogin={setLogin} />}

            {locatedInUS && 
                <LocatedInUS 
                    setLocatedInUS={setLocatedInUS} 
                    setLargeCorporation={setLargeCorporation} />}

            {(largeCorporation || loginSuccess) && 
                <LargeCorporation 
                    setLargeCorporation={setLargeCorporation} 
                    setTakingSurvey={setTakingSurvey} 
                    setContactedLargeCorp={setContactedLargeCorp} 
                    setLoginSuccess={setLoginSuccess} />}

            {takingSurvey && 
                <TakingSurvey 
                    setTakingSurvey={setTakingSurvey} 
                    setLargeCorpoSignForm={setLargeCorpoSignForm} />}

            {largeCorpoSignForm && 
                <LargeCorpoSignForm />}

            {contactedLargeCorp && 
                <ContactedLargeCorp 
                    setContactedLargeCorp={setContactedLargeCorp} 
                    setMustContactLargeCorp={setMustContactLargeCorp} 
                    setSmallCorpSignUp={setSmallCorpSignUp} />}

            {mustContactLargeCorp && <MustContactLargeCorp />}

            {smallCorpSignUp && <SmallCorporationSignUpForm />}

            {login && 
                <Login 
                    setLogin={setLogin} 
                    setFacebookLogin={setFacebookLogin} 
                    setEmailLogin={setEmailLogin} />}

            {(facebookLogin || emailLogin) &&
                <LoginComponent
                        setLoginSuccess={setLoginSuccess}
                        setFacebookLogin={setFacebookLogin}
                        setEmailLogin={setEmailLogin}
                        emailLogin={emailLogin}
                        facebookLogin={facebookLogin} />
            }
        </div>
    );
};

export default Multiform;