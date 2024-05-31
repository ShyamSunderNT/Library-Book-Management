import axios from "axios"
const API_URL ="https://66594422de346625136bc4df.mockapi.io/api"
const AxiosService=axios.create({

    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService