const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ea09288ffaac970407140a5c3929b857/' + latitude + ',' + longitude + '?units=si&lang=sv'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weater service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + '. There is ' + body.currently.precipProbability + '% chance of rain. The humidity is ' + body.currently.humidity + ' and the UV-index is ' + body.currently.uvIndex + '.')
        }
    })
}

module.exports = forecast
