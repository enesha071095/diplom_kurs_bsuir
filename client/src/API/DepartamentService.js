import axios from 'axios';

export default class DepartamentService {

        static async getAll() {
          const response  = axios.get('http://localhost:3000/api/v1/departaments/', {
            headers: {
              'Content-Type': 'application/json',
              'authorization': localStorage.getItem('token')
            }
           });
       return response;
        }

}