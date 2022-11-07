import React, {useState, useEffect, useContext} from 'react'
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import UserService from './../API/UserService'
import SimpleBreadcrumSection from '../components/sections/SimpleBreadcrumSection';
import { AuthContext } from '../context';
import UserCard from '../components/Profile/UserCard';
import iconLoadSrc from './../assets/images/image_load.gif'
import UserDocsTable from '../components/Executors/UserDocsTable';
import { useUsers } from '../hooks/useUsers';
import SearchForm from '../components/sections/SearchForm';

const ExecutorsPage = () => {

  const {isAdmin} = useContext(AuthContext);
   const  [usersData, setUsersData] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [query, setQuery] = useState('')
  const searchedUsersData = useUsers(usersData, query)

    useEffect(()=>{
        const fetchUsers = async  ()=>{
            try{
                const response = await UserService.getAll()
                console.log(response.data.data)

                 var tempData=response.data.data.data.map((u)=>{
                   var obj={}
                   obj.user={...u.attributes}
                   var docs = response.data.data.included.filter((doc)=>doc.attributes.user_id===u.attributes.id
                   ).map((doc)=>doc.attributes)
                   obj.docs=docs
                   return obj
                  })
                  setUsersData(tempData)
                setIsLoading(false)
            }
            catch(e){
                console.log(e)
                setIsLoading(false)
              }
           }

           fetchUsers()
    },[])


        return (
           <>
              <SimpleBreadcrumSection isAdmin={isAdmin} pageName="Клиенты корпорации"
                form={<SearchForm query={query} setQuery={setQuery} />} />

            {
              isLoading ?
              <MDBRow className="justify-content-center">
                  <MDBCol  lg="3" className="mb-5">
                  <img src={iconLoadSrc} alt="Project"
                  style={{display: 'block', margin: 'auto',  objectFit: 'cover'}}
                  className="img-fluid "/>

                                </MDBCol>
              </MDBRow>

              :
              searchedUsersData.map( (data) =>
              <>
              <MDBRow className="justify-content-center">

                <UserCard user={data.user} key={data.user.id} />

              <MDBCol  lg="9" className="mb-5">
                <UserDocsTable  docs={data.docs}  key={data.user.id} />
              </MDBCol>
              </MDBRow>
              </>
              )

            }

           </>
          );

}

export default ExecutorsPage
