
const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    //console.log(encodedUrl);
    
    const instance = axios.create({
        url: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key":"237a9d9d53msh92cdfe33a6119d2p1a1401jsnccfcb713210d",
            "useQueryString":true
        }
    });
    
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }
    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion, lat, lng
    }

}

module.exports = {
    getLugarLatLng
}