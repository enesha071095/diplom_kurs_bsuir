import React, { Component, useState, useEffect } from 'react';
import {MDBView, MDBModal, MDBRow,MDBInput,MDBCol, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn,MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDropzone} from 'react-dropzone';

import TypeService from './../API/TypeService'
import DepartamentService  from './../API/DepartamentService'
import UserService from './../API/UserService'
import DocumentService from '../API/DocumentService';


const TopNavigation = ({logOut})=> {

    const [types, setTypes] = useState([])
    const [departaments, setDepartaments] = useState([])
    const [usersShort, setUsersShort] = useState([])
    

    const [docName, setDocName] = useState('')
    const [typeDocId, setTypeDocId] = useState(null)
    const [departamentId, setDepartamentId] = useState(null)
    const [userId, setUserId] = useState(null)
    const [count, setCount] = useState(0)
    

    const [modal, setModal] = useState(false)
    const [startDate, setStartDate] = useState(new Date());

    
    useEffect(()=>{
        const  fetchData = async () => {
            try {
                var response = await TypeService.getAll()
                setTypes(response.data.data.data.map((t)=>t.attributes))
                 response = await DepartamentService.getAll()
                setDepartaments(response.data.data.data.map((t)=>t.attributes))
                 response = await UserService.getAllShort()
                setUsersShort(response.data.data.data.map((t)=>t.attributes))
                
            }catch(e){
                console.log(e)
            }
        }

        fetchData()

    },[])

    
    const handleNewDoc =()=>{

        const newDoc = async ()=>{
            try {
                var doc={}
                doc.name = docName
                doc.type_id = typeDocId
                doc.user_id = userId
                doc.departament_id = departamentId
                doc.deadline = startDate
                doc.count = count
                const response = await DocumentService.newDocument(doc)
                console.log(response)
                setModal(false)
            }catch(e){
                console.log(e)
            }
        }

        newDoc()
        console.log(docName, typeDocId, departamentId, userId, startDate)

    }
    
        return (
            <>
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                <MDBNavbarBrand href="/">
                    <strong className="lable">CONTSIGN</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler  />
                <MDBCollapse  navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active  >
                            <MDBBtn outline className="createBtn" onClick={()=>setModal(!modal)} size="sm">Создать договор</MDBBtn>
                            
                        </MDBNavItem>
                       
                        <MDBNavItem>
                        <MDBNavItem >
                            <MDBNavLink to="/statistics" className="navLink" >Статистика</MDBNavLink>
                        </MDBNavItem>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                       
                        <MDBNavItem>
                            <a className="border  rounded mr-1 nav-link Ripple-parent leadBtn"
                            href="http://localhost:3000/admin/" target="_blank"
                            ><MDBIcon icon="user-cog" className="mr-2 "/>Управление</a>
                        </MDBNavItem>

                        <MDBNavItem onClick={logOut}>
                            <a className="exitBtn border border-light rounded mr-1 nav-link Ripple-parent" 
                             
                            href="#" >
                                <MDBIcon  icon="sign-out-alt" className="mr-2 "/>
                                Выйти
                                </a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>

                
                <MDBModal  isOpen={modal} toggle={()=>setModal(!modal)}>
                <MDBModalHeader className="gradient-card-header createDocView"  style={{textAlign: 'center'}} toggle={()=>setModal(!modal)}>
                <MDBView >
                    
                        <h4 className="h4-responsive text-white">Создание договора</h4>
                    </MDBView>
                        </MDBModalHeader>
                        <MDBModalBody className="createDocBody">
                           <MDBCol md="12">
                           <h5 className="font-weight-bold pl-0 my-4">
                            <strong>Заполните поля нового договора:</strong></h5>
                                <MDBInput label="Название" className="mt-4 card-subtitle text-white"  value={docName} onChange={ (e)=>{setDocName(e.target.value)} } />

                                <select className="browser-default custom-select mb-3" value={typeDocId} 
                                onChange={e => setTypeDocId(e.target.value)}  >
                                <option>Вид продукции:</option>
                                {
                                   types.map((t)=>
                                   <option value={t.id}>{t.name}</option>
                                   )     
                                }
                                </select>

                                <select className="browser-default custom-select mb-3" value={departamentId} 
                                onChange={e => setDepartamentId(e.target.value)} >
                                <option>Ответственный отдел:</option>
                                {
                                   departaments.map((t)=>
                                   <option value={t.id}>{t.name}</option>
                                   )     
                                }
                                </select>

                                <select className="browser-default custom-select mb-3" value={userId} 
                                onChange={e => setUserId(e.target.value)} >
                                <option>Партнер-покупатель:</option>
                                {
                                   usersShort.map((t)=>
                                   <option value={t.id}>{`${t.second_name} ${t.first_name}`}</option>
                                   )     
                                }
                                </select>
                                <MDBRow className="justify-content-center">
                                <MDBCol lg="4" className="text-white">
                                    Кол-во единиц:
                                        </MDBCol>
                                    <MDBCol lg="8">
                                    <input type="number" id="typeNumber" class="form-control" value={count} 
                                onChange={e => setCount(e.target.value)} />
                                    </MDBCol>
                                </MDBRow>
                                <br />
                                <MDBRow className="justify-content-center">
                                    <MDBCol lg="6" className="text-white">
                                    Cрок рассмотрения:
                                        </MDBCol>
                                    <MDBCol lg="6">
                                        <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)} className="text-center" />
                                    </MDBCol>
                                </MDBRow>
                                <br /> 
                                <MDBRow className="justify-content-center">
                                <MDBBtn  rounded className="float-right createDocView" onClick={handleNewDoc} >Создать</MDBBtn>
                                </MDBRow>
                            </MDBCol>
                        </MDBModalBody>
                      
                        </MDBModal>
              
                </>
        );
}

export default TopNavigation;