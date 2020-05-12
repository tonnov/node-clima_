
const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=518c525b6e830a32f3f5dac10e7494e1&units=metric`);

    return resp.data.main.temp;
}



module.exports = {
    getClima
}
