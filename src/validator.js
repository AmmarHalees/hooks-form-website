import { validationSchema } from "./validationSchema";


export function findErrors(values ,emailControl) {

    let errors = {};
    let errorFlag = false;

    const localValidationSchema = {

        ...validationSchema ,

        email:validationSchema.email.filter(rule => emailControl[rule.id])

    }

    console.log(localValidationSchema)
    console.log(emailControl)

    Object
        .entries(values)
        .forEach(([key, value]) => {


            if(localValidationSchema[key].some(rule => !rule.validator(value))){

                errorFlag = true;

                errors[key] = localValidationSchema[key].filter(rule => !rule.validator(value))
                .map(error => error.message); 
            }
     
                          

        }


        );


    return [errorFlag , errors]
}
