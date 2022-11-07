import axios from 'axios'

export default class DocumentService{

    static async getAll(){
        const response =  axios.get('http://localhost:3000/api/v1/documents/',{
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token')
            }
        })
        return response
    }

    static async getByUserId(user_id){
        const response =  axios.get('http://localhost:3000/api/v1/documents/'+user_id,{
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token')
            }
        })
        return response
    }

    static async updateDocument(document_id){
        const response =  axios.patch('http://localhost:3000/api/v1/documents/'+document_id,{}, {
            params: {status: 1},
             headers: {
               'Content-Type': 'application/json',
               'authorization': localStorage.getItem('token')
             }
            });
        return response;
      }

      static async newDocument(data){
        const response = axios.post('http://localhost:3000/api/v1/documents/', {}, {
            params: data,
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token')
            }
        })

        return response
      }

}