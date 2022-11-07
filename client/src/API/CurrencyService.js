import axios from 'axios';

export default class CurrencyService {

    static async getAll() {
        const response  = axios.get('http://localhost:3000/api/v1/currencies/', {
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token')
            }
        });
        return response;
    }

}
