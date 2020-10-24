import { validationSchema } from "./validationSchema";

export function findErrors(values ,emailControl ,passControl) {

    let errors = {};
    let errorFlag = false;

    const localValidationSchema = {

        ...validationSchema ,
        email:validationSchema.email.filter(rule => emailControl[rule.id]),
        password:validationSchema.password.filter(rule => passControl[rule.id])
    }

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

    return [errorFlag , errors ,localValidationSchema]
}
