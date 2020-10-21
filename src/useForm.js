import { useState } from 'react';
import { findErrors } from './validator';

const useForm = () => {



    const [errorsObject, setErrors] = useState({});

    const [isError, setError] = useState(false);

    const [loading, setLoading] = useState(false);

    const [didSubmit, setDidSubmit] = useState(false);


    const [values, setValues] = useState({

        email: '',
        password: ''

    });




    function handleSubmit(e) {

        e.preventDefault();

        setLoading(true);

        const [ error, errorsObject] = findErrors(values)

        setErrors(errorsObject);
        setError(error);

        setDidSubmit(true);


    }


    function handleChange({ target: { value, name } }) {

        setDidSubmit(false);

        if(isError){


            setError(false);
            setErrors({})
        }


        setValues(prevValues => ({

            ...prevValues,

            [name]: value

        }))

    }


    return [values ,handleChange, handleSubmit , errorsObject , isError , loading ,didSubmit];
}

export default useForm;