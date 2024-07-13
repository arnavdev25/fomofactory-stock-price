Validate = function () {
    this.error = []


    this.validate = (body, validate_arr) => {
        this.error = []
        let result = {}
        let body_parms = Object.keys(body)
        let validation_params = Object.keys(validate_arr)

        for (validation_param in validation_params) {
            let param_to_validate = validation_params[validation_param]
            let is_exist = this.isInArray(param_to_validate, body_parms)

            if (is_exist) {
                rules = validate_arr[param_to_validate]
                rules_array = rules.split(",")

                for (rule in rules_array) {
                    this[rules_array[rule]](param_to_validate, body[param_to_validate])
                }
            }
            else {
                this.error.push('Please pass ' + param_to_validate + ' parameter')
            }
        }

        if (this.error.length > 0) {
            result.hasError = true
            result.errors = this.error
        }
        else {
            result.hasError = false
        }

        return result
    }


    this.required = function (name, value) {
        if (typeof value == "string") {
            if (value.trim() == '') {
                this.error.push(name + ' is required')
            }
        }

        if ((value == '' || value.length == 0) && value != 0) {
            this.error.push(name + ' is required')
        }
    }


    this.isInArray = (value, array) => {
        if (Array.isArray(array) && array.length > 0)
            return array.indexOf(value) > -1
        else return false
    }
}