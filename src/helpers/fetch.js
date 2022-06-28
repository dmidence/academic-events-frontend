const axios = require('axios');
let API_URL= "http://localhost:3000/";
const fetchSinToken = async (endpoint, data,method, params= {}) => {
    return await axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: data,
        headers: { "Content-Type": "application/json" ,     
        },
        params
    })
    
};


const fetchConToken = async (endpoint, data,method) => {

    let userData = sessionStorage.getItem('academiceventstoken');

    let token = JSON.parse(!!userData ? userData :'').token

    return await axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: data,
        headers: { 
            "Content-Type": "multipart/form-data;charset=UTF-8" ,
            
            "Authorization": `Bearer ${token}`
        },
        // params
    })
    
};


export {
    fetchSinToken,
    fetchConToken,
}