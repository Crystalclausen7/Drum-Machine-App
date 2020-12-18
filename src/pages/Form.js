import React, { useState } from 'react';
import FormSignup from '../components/FormSignup/FormSignup';
import FormSuccess from '../components/FormSuccess/FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);

    }
    return (
        <>
        
        <div className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src="img/Image from iOS.jpg" alt="spaceship" className="form-img"/>
            </div>
            {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
        </div>
       
        </>
    );
};

export default Form
