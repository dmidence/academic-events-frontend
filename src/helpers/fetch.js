import axios from "axios";

// let API_URL = "http://localhost:3000";
let API_URL = "https://eventsacad.works/";

const fetchSinToken = async (endpoint, data, method, params = {}) => {
  return await axios({
    method: method,
    url: `${API_URL}/${endpoint}`,
    data: data,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    params,
  });
};

const fetchConToken = async (endpoint, data, method) => {
  let accessToken = sessionStorage.getItem("accessToken");

  accessToken = JSON.parse(accessToken);
  let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${accessToken}`,
  };

  return await axios({
    method: method,
    url: `${API_URL}/${endpoint}`,
    data: data,
    headers,
    // params
  });
};

export { fetchSinToken, fetchConToken };
