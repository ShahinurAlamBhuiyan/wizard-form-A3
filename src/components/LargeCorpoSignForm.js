import React, { useState } from 'react';

const LargeCorpoSignForm = () => {
    const [formData, setFormData] = useState();
    const handleChange = (e) => {
        const userData = {...formData }
        userData[e.target.name] = e.target.value;
        setFormData(userData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { ...formData }
        setFormData(userData);
        console.log(e)
    }
    console.log(formData)
    return (
        <div>
            <h1>Large Corporation Sign-Up form</h1>
            <form className="row g-3 card" onSubmit={handleSubmit}>
                <div className="">
                    <label for="validationServer01" className="form-label">First name</label>
                    <input name='firstName' onChange={handleChange} type="text" className="form-control" id="validationServer01" required />
                </div>
                <div className="">
                    <label for="validationServer02" className="form-label">Last name</label>
                    <input name="lastName" onChange={handleChange} type="text" className="form-control" id="validationServer02" required />
                </div>
                <div className="">
                    <label for="validationServerUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend3">@</span>
                        <input name='username' onChange={handleChange} type="text" className="form-control" id="validationServerUsername"  required />
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationServer03" className="form-label">City</label>
                    <input name='city' onChange={handleChange} type="text" className="form-control" id="validationServer03" required />
                </div>
                <div className="col-md-6">
                    <label for="validationServer06" className="form-label">House Name</label>
                    <input name='houseName' onChange={handleChange} type="text" className="form-control" id="validationServer06" required />
                </div>
                <div className="col-md-3">
                    <label for="validationServer05" className="form-label">Zip</label>
                    <input name='zip' onChange={handleChange} type="text" className="form-control" id="validationServer05" required />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input onChange={handleChange} className="form-check-input" type="checkbox" value="" id="invalidCheck3" required />
                        <label className="form-check-label" for="invalidCheck3">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div >
    );
};

export default LargeCorpoSignForm;