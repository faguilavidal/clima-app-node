const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2745644dd2035cde1db630e373db5c94&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}