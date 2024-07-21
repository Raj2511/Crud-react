import axios from "axios"

const apiclient = axios.create( {
    baseURL: 'http://127.0.0.1:5001/react-crud-2b469/us-central1/app/api',
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiclient;