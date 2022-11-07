import axios from 'axios';

export default class UserService {

    static async getById(id) {
        const response =  axios.get('http://localhost:3000/api/v1/users/' + id, {
             headers: {
               'Content-Type': 'application/json',
               'Authorization': localStorage.getItem('token')
             }
            });
        return response;
        }
    
        static async getAll() {
          const response  = axios.get('http://localhost:3000/api/v1/users/', {
            headers: {
              'Content-Type': 'application/json',
              'authorization': localStorage.getItem('token')
            }
           });
       return response;
        }

        static async getAllShort() {
          const response  = axios.get('http://localhost:3000/api/v1/users/index_short', {
            headers: {
              'Content-Type': 'application/json',
              'authorization': localStorage.getItem('token')
            }
           });
       return response;
        }

}