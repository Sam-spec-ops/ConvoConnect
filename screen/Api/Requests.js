import Axios from 'axios'
const RequestServer = (data, route) =>{
    try {
        const response = Axios.post(route, data);
    } catch (error) {
        console.error(error);
    }
}

export default RequestServer