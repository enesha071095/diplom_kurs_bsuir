import React, { useEffect } from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardImage,MDBCardHeader, MDBRow, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';
import iconLoadSrc from './../../assets/images/image_load.gif'

   const StatisticsCard = ({data, isLoading})=> {

    const getUrgentCount = ()=>{
        return  (data.filter((obj) => 
        !obj.status  
         && 
         (new Date(obj.deadline).setDate(new Date(obj.deadline).getDate()-5) < new Date()  )
         &&
         (new Date(obj.deadline) > new Date()  )
    )).length
    }

    const overdueCount = ()=>{
            return (data.filter((obj) => 
            !obj.status  
             && 
             (new Date(obj.deadline) < new Date()  )
             
        )).length
    }
   
        return (    
            <>
                    <MDBCard className="mb-4">
                        <MDBCardBody>
                            <MDBListGroup className="list-group-flush">
                                {
                                    isLoading ?
                                        <MDBCardImage className="img-fluid" src={
                                                                    iconLoadSrc}  />
                                    :
                                    <>
                               
                                <MDBListGroupItem>
                                    Просрочены
                                    <MDBBadge color="danger-color-dark" pill className="float-right">
                                         {
                                         overdueCount()
                                         }
                                        <MDBIcon icon="tools" className="ml-1"/>
                                    </MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem style={{fontSize: '14px'}}>
                                    Срочные (менее 5 дней)
                                    <MDBBadge color="danger-color" pill className="float-right">
                                         {
                                         getUrgentCount()
                                         }
                                        <MDBIcon icon="tools" className="ml-1"/>
                                    </MDBBadge>
                                </MDBListGroupItem>


                                <MDBListGroupItem>
                                    Всего к подписанию
                                    <MDBBadge color="warning-color" pill className="float-right">
                                        {[(data.filter(obj=> !obj.status)).length]}
                                        <MDBIcon icon="tools" className="ml-1"/>
                                    </MDBBadge>
                                </MDBListGroupItem>

                                <MDBListGroupItem>
                                    Подписано
                                    <MDBBadge color="success-color" pill className="float-right">
                                    {[(data.filter(obj=> obj.status)).length]}
                                        <MDBIcon icon="sign-language" className="ml-1"/>
                                    </MDBBadge>
                                </MDBListGroupItem>

                                <MDBListGroupItem>
                                    Всего
                                    <MDBBadge color="primary-color" pill className="float-right">
                                        {data.length}
                                    </MDBBadge>
                                </MDBListGroupItem>

                                </>

                                }
                                


                            </MDBListGroup>
                        </MDBCardBody>
                    </MDBCard>
                    </>
            
        )
    
}

export default StatisticsCard;

