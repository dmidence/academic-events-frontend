import axios from 'axios';

let API_URL= "http://localhost:3000";
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

    let accessToken = sessionStorage.getItem('accessToken');
    console.log("accessToken")
    console.log(accessToken)
    return await axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: data,
        headers: { 
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            "Authorization": `Bearer ${accessToken}`
        },
        // params
    })
    
};


export {
    fetchSinToken,
    fetchConToken,
}