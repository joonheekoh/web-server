const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0e1aeeb614eaf3517e2574d8653a23f7&query=' + latitude + ',' + longitude
    //  + '&units=f'
    
    request({ url, json: true }, (error, { body }) => {
        if (error)  {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else 
            callback(undefined, body.current.weather_descriptions[0] + ". Its currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. The humidity is " + body.current.humidity + "%.")
        }
)}

module.exports = forecast