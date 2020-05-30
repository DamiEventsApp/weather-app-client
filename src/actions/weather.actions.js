import Axios from "axios"

export const weatherAPI = Axios.create({
    // baseURL:  "https://community-open-weather-map.p.rapidapi.com",
    headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "71c31ec718msh2de722c911d7970p158f55jsn6f54764ea00e",
        "useQueryString": true,
    }
})

