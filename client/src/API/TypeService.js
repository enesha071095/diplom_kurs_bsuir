import axios from 'axios';

export default class TypeService {

        static async getAll() {
          const response  = axios.get('http://localhost:3000/api/v1/types/', {
            headers: {
              'Content-Type': 'application/json',
              'authorization': localStorage.getItem('token')
            }
           });
       return response;
        }

}