const request = require("request")


exports.request = async (options) => {
    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (error) {
                console.log('error ', error)
                resolve({ success: 500 })
            }
            let result = JSON.parse(body)
            resolve(result)
        })
    })
}