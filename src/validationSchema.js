

export const validationSchema = {

    email: [

        {
            required: true,
            message: 'Email is required',
            validator: function (email) {
                return this.required && email.length > 0
            }

        }
        ,
        {
            minLength: 15,
            message: 'Email isnt long enough',
            validator: function (email) {
                return email.length >= this.minLength
            }

        },

        {
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
            required: true,
            message: 'Password is required',
            validator: function (password) {
                return this.required && password.length > 0
            }

        }
        ,
        {
            minLength: 15,
            message: 'password isnt long enough',
            validator: function (password) {
                return password.length >= this.minLength
            }

        }
    ],


}


