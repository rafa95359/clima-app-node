const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl= encodeURI(direccion);

    let resp= await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)
        
    if(resp.data.status==='ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${direccion}`);

    }     
    /*  Hallando coordenadas a partir de res que me devuelve axios*/
    let location =resp.data.results[0];        
    let coors = location.geometry.location;   
    
    
    //Para mostrar los resultados de manera chevere:console.log(JSON.stringify(resp.data,undefined,2));
    //console.log(resp.status);
    //console.log('Direccion: ',location);
    //console.log('Longitud: ',coors.lng);
    //console.log('Latitud: ',coors.lat);  

    return {
        direccion: location.formatted_address,
        lat:coors.lat,
        lng:coors.lng
    }}

module.exports = {
    getLugarLatLng
}


