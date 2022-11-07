import React, {useState, useEffect, useContext} from 'react'
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import UserService from './../API/UserService'
import DocumentService from './../API/DocumentService'
import iconLoadSrc from './../assets/images/image_load.gif'
import UserCard from './../components/Profile/UserCard'
import SimpleBreadcrumSection from './../components/sections/SimpleBreadcrumSection';
import ChartDocs from './../components/Profile/ChartDocs'
import StatisticsCard from './../components/Profile/StatisticsCard'
import { AuthContext } from '../context';
import DocCard from '../components/Profile/DocCard';

const ProfilePage = () => {

    const {isAdmin} = useContext(AuthContext);
    const  [user, setUser] = useState([])
    const [documents, setDocuments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [avatar, setAvatar] = useState("")

    useEffect(()=>{
        const fetchCurrentUser = async  ()=>{
            try{
                const response = await UserService.getById(localStorage.getItem('user_id'))
                setUser(response.data.data.data.attributes)
                setDocuments(response.data.data.included.map( doc => doc.attributes ))
                console.log(response.data.data.included)
                setIsLoading(false)
            }
            catch(e){
                console.log(e) 
                setIsLoading(false)
            }
           }

        fetchCurrentUser()
    },[])

    const changeDocStatusById = (id)=> {
       setDocuments(documents.map(doc => (doc.id === id ? {...doc, status: true}  : doc)))

       const updateDocument = async  ()=>{
        try{
            const response = await DocumentService.updateDocument(id)
            console.log(response)
        }
        catch(e){
            console.log(e) 
        }
       }

       updateDocument()

    }

    return (
        <>
        <SimpleBreadcrumSection isAdmin={isAdmin} pageName="Личный профиль" />
            <MDBRow className="justify-content-center">

            <MDBRow>
                {
                    isLoading ? 
                    <MDBCol  lg="3" className="mb-5">
                    <MDBCardImage className="img-fluid loadImage" src={
                            iconLoadSrc}  />
                    </MDBCol>
                    :            
                    <UserCard user={user} />
                }
        <MDBCol  lg="6">
            <ChartDocs data={documents}/>
        </MDBCol> 
        <MDBCol  lg="3">
             <StatisticsCard data={documents} isLoading={isLoading}/>   
        </MDBCol> 
        </MDBRow>  



        <MDBRow> 
          {documents.map( doc => (
              <DocCard key={doc.id} doc={doc} changeDocStatusById={changeDocStatusById} />
            ))
          }
          </MDBRow>
          
        
     


    </MDBRow>
        </>
    )
}

export default ProfilePage
