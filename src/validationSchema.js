

export const validationSchema = {

    email: [

        {
            id:'required',
            required: true,
            message: 'Email is required',
            validator: function (email) {
                return this.required && email.length > 0
            }

        }
        ,
        {
            id:'minLength',
            minLength: 15,
            message: 'Email isnt long enough',
            validator: function (email) {
                return email.length >= this.minLength
            }

        },

        {
            id:'properFormatting',
            pattern: /^\S+@\S+\.\S+$/,
            message: 'Email isnt correctly formatted',
            validator: function (email) {
                return email.match(this.pattern)
            }

        },

    ]

    ,

    password: [


        {
            id:'required',

            required: true,
            message: 'Password is required',
            validator: function (password) {
                return this.required && password.length > 0
            }

        }
        ,
        {
            id:'minLength',

            minLength: 15,
            message: 'password isnt long enough',
            validator: function (password) {
                return password.length >= this.minLength
            }

        }


        ,

        {
            id:'noSpace',

            pattern: /^[\S]+$/,
            message: 'Password Cannot contain spaces',
            validator: function (password) {
                return password.match(this.pattern)
            }

        }


        ,

        {

            id:'oneLowerCase',
            pattern: /(?=.*[a-z])/,
            message: 'Password must contain at least 1 lowercase alphabetical character',
            validator: function (password) {
                return password.match(this.pattern)
            }

        }
        ,

        {
            id:'oneUpperCase',
            pattern: /(?=.*[A-Z])/,
            message: 'Password must contain at least 1 uppercase alphabetical character',
            validator: function (password) {
                return password.match(this.pattern)
            }

        }

        ,

        {
            id:'oneNumeric',
            pattern: /(?=.*[0-9])/,
            message: 'Password must contain at least 1 numeric character',
            validator: function (password) {
                return password.match(this.pattern)
            }

        }
        
        ,

        {
            id:'oneSpecialChar',
            pattern: /(?=.*[!@#$%^&*])/,
            message: 'Password must contain at least one special character',
            validator: function (password) {
                return password.match(this.pattern)
            }

        }
    ]


}


