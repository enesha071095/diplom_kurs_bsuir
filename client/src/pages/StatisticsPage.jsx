import React, {useState, useEffect, useContext} from 'react'
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import UserService from './../API/UserService'
import DocumentService from '../API/DocumentService';
import SimpleBreadcrumSection from '../components/sections/SimpleBreadcrumSection';
import { AuthContext } from '../context';
import UserCard from '../components/Profile/UserCard';
import iconLoadSrc from './../assets/images/image_load.gif'
import { useUsers } from '../hooks/useUsers';
import SearchForm from '../components/sections/SearchForm';
import StatisticsCard from './../components/Profile/StatisticsCard'
import ChartDocs from './../components/Profile/ChartDocs'
import GeneralDocsStatSection from '../components/Statistics/GeneralDocsStatSection';

const StatisticsPage = () => {

  const {isAdmin} = useContext(AuthContext);
   const  [usersData, setUsersData] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [isDocsLoading, setIsDocsLoading] = useState(true)
   const [query, setQuery] = useState('')
  const searchedUsersData = useUsers(usersData, query)
  const  [docs, setDocs] = useState([])

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
        
           const fetchDocs = async  ()=>{
            try{
                const response = await DocumentService.getAll()
                setDocs(response.data.data.data.map((docData)=>docData.attributes ))  
                setIsDocsLoading(false)
            }
            catch(e){
                console.log(e) }
                setIsDocsLoading(false)
           }

           fetchDocs()
           fetchUsers()
    },[])

   
        return (
           <>
              <SimpleBreadcrumSection isAdmin={isAdmin} pageName="Торговые партнеры" 
                form={<SearchForm query={query} setQuery={setQuery} />} />

                {
                    isDocsLoading ?
                    <MDBRow className="justify-content-center">
                            <MDBCol  lg="2" className="mb-5">
                            <img src={iconLoadSrc} alt="Project"  
                            style={{display: 'block', margin: 'auto',  objectFit: 'cover'}} 
                            className="img-fluid "/>
                                </MDBCol>
                        </MDBRow>
                    :
                    <GeneralDocsStatSection docs={docs} />

                }

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
              <>
              
              {
                searchedUsersData.map( (data) => 
                <MDBRow className="justify-content-center">
                <UserCard user={data.user} />
                <MDBCol  lg="6">
                        <ChartDocs data={data.docs}/>
                    </MDBCol> 
                    <MDBCol  lg="3">
                        <StatisticsCard data={data.docs} isLoading={isLoading}/>   
                    </MDBCol> 
                    </MDBRow>
              )
                }
             
               </>

            }

           </>
          );
    
}

export default StatisticsPage
