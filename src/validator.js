import { validationSchema } from "./validationSchema";


export function findErrors(values) {

    let errors = {};
    let errorFlag = false;

    Object
        .entries(values)
        .forEach(([key, value]) => {


            if(validationSchema[key].some(rule => !rule.validator(value))){

                errorFlag = true;

                errors[key] = validationSchema[key].filter(rule => !rule.validator(value))
                .map(error => error.message); 
            }
     
                          

        }


        );


    return [errorFlag , errors]
}
