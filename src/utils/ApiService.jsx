import axios from "axios"
const API_URL ="https://665b0f66003609eda45fb2b9.mockapi.io/api"
const AxiosService=axios.create({

    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService