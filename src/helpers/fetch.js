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

    let userData = sessionStorage.getItem('academiceventstoken');
    // Obtener TOKEN de userdata
    // let token = JSON.parse()

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