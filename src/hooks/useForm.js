import { useState } from 'react';
import { findErrors } from '../utils/validator';

const useForm = (emailControl , passControl) => {


    const [errorsObject, setErrors] = useState({});

    const [newValidationSchema, setValidationSchema] = useState({});


    const [isError, setError] = useState(false);

    const [loading, setLoading] = useState(false);

    const [didSubmit, setDidSubmit] = useState(false);


    const [values, setValues] = useState({

        email: '',
        password: ''

    });


    function handleClear(type){

        setDidSubmit(false);

        if(isError){


            setError(false);
            setErrors({})
        }



        setValues(prevValues =>({

            ...prevValues,
            [type] :''

        }));



    }
  

    function handleSubmit(e) {

        e.preventDefault();

        setLoading(true);

        const [ error, errorsObject ,localValidationSchema] = findErrors(values ,emailControl,passControl)

        setErrors(errorsObject);
        setError(error);

        setValidationSchema(localValidationSchema);

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


    return [values ,handleChange, handleSubmit , errorsObject , isError , loading ,didSubmit,handleClear ,newValidationSchema];
}

export default useForm;