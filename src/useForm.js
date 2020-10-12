import { useState } from 'react';

const useForm = () => {

    const [values, setValues] = useState({

        email: 'geoff@example.com',
        password: '1234'

    });

    const { email, password } = values;


    function handleValidation(values){

        console.log(values);

    }


    function handleSubmit(e) {

        e.preventDefault();

        handleValidation(values)

    }


    function handleChange({ target: { value, name } }) {

        setValues(prevValues => ({

            ...prevValues,

            [name]: value

        }))

    }


    return [email, password, handleChange, handleSubmit];
}

export default useForm;