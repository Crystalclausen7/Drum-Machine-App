import { useState, useEffect } from 'react'
var axios = require("axios")

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)


    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));

        axios.post("/api/users", {
            username: values.username,
            password: values.password
        }).then((res) => { })
            .catch((err) => { console.log(err) })

        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]
    );

    return { handleChange, values, handleSubmit, errors };

};

export default useForm;