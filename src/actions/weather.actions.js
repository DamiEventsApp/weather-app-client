import Axios from "axios"

export const weatherAPI = Axios.create({
    // baseURL:  "https://community-open-weather-map.p.rapidapi.com",
    headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "db3236f968mshc12d9100de1580ap188207jsnde8adb187409",
        "useQueryString": true
    }
})

