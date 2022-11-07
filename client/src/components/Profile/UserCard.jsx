import React, {useState, useEffect, useContext} from 'react'
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';


const UserCard = ({user}) => {

    return (
        <>
       <MDBCol sm="12" md="6" lg="3" className="mb-5">
                        <MDBCard>
                    <MDBCardImage className="img-fluid" style={{display: 'block', margin: 'auto'}} src={
                            `http://localhost:3000${user.avatar}`} />
                     <MDBCardBody>
                   
                        
                        <MDBCardTitle className="text-center mb-2 font-bold">{`${user.second_name} ${user.first_name}`}</MDBCardTitle>
                            <MDBCardTitle sub className="text-center titlePos mb-2 font-bold">{user.position}</MDBCardTitle>
                            <hr  />
                            <MDBCardText className="cardText">
                                <strong className="mb-2">Email:   {user.email}</strong> 
                                <br />
                                <strong className="mb-2">Моб. номер:   {user.phone_number}</strong> 
                            
                            </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className=" profile-card-footer  text-center">
                            <strong className="mb-2">Сотрудничество:</strong><strong> {user.working_time}</strong> <strong className="mb-2">года</strong> 
                            </MDBCardFooter>
                </MDBCard>
                </MDBCol>
        </>
    )
}

export default UserCard

