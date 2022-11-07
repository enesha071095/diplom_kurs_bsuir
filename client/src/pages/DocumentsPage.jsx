import React, {useState, useEffect, useContext} from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import DocumentService from './../API/DocumentService'
import  useDocuments  from '../hooks/useDocuments';
import SearchForm from '../components/sections/SearchForm';
import SortForm from '../components/Documents/SortForm';
import iconLoadSrc from './../assets/images/image_load.gif'
import { AuthContext } from '../context';
import SimpleBreadcrumSection from '../components/sections/SimpleBreadcrumSection';
import DocumentsTable from './../components/Documents/DocumentsTable'
import DocStatSmallCard from '../components/Documents/DocStatSmallCard';


const DocumentsPage = () => {

    const {isAdmin} = useContext(AuthContext)
    const  [docs, setDocs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [sort, setSort] = useState('')
  const searchedDocs = useDocuments(docs, query, sort)

    useEffect(()=>{
        const fetchDocs = async  ()=>{
            try{
                const response = await DocumentService.getAll()
                console.log(response.data.data)
                setDocs(response.data.data.data.map((docData)=>docData.attributes ))  
                setIsLoading(false)
            }
            catch(e){
                console.log(e) }
                setIsLoading(false)
           }
           fetchDocs()
    },[])

   
    return (
      <>  
         <SimpleBreadcrumSection isAdmin={isAdmin} pageName="Все договоры" 
           form={<SearchForm query={query} setQuery={setQuery} />} 
          sortForm={ <SortForm  sort={sort} setSort={setSort}  /> }
           />
        
       
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
         <DocStatSmallCard docs={searchedDocs} initDocsCount={docs.length} />
         <DocumentsTable docs={searchedDocs}  />
         </>
       }

      </>
     );
    
}

export default DocumentsPage
