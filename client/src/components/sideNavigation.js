import React,  {useState, useEffect, useContext} from 'react';
import logo from "../assets/images/icon.jpg";
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBNavbarBrand } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import {AuthContext} from './../context'

const TopNavigation = ({logOut}) => {


    const {isAdmin} = useContext(AuthContext);


    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo} color="yellow"/>
                <MDBNavbarBrand >
                    <strong style={{color: "primary"}} className="lable ml-4" >DOCOMMERCE</strong>
                </MDBNavbarBrand>
            </a>

                <p></p>
                <MDBListGroup className="list-group-flush">
                {
                    isAdmin
                    ?
                        <></>

                :
                <NavLink exact={true} to="/" activeClassName="activeClass">
                <MDBListGroupItem>
                    <MDBIcon icon="user" className="mr-3"/>
                    Мои договоры
                </MDBListGroupItem>
            </NavLink>
                }

                {
                    isAdmin
                    ?
                    <NavLink to="/docs" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="file-alt" className="mr-3"/>
                        Все договоры
                    </MDBListGroupItem>
                </NavLink>
                :
                <></>
                }

                    {
                        isAdmin ?
                            <NavLink to="/executors" activeClassName="activeClass">
                                <MDBListGroupItem>
                                    <MDBIcon icon="users" className="mr-3"/>
                                    Корпорация
                                </MDBListGroupItem>
                            </NavLink>
                            :
                            null

                    }


                <NavLink to="/signout" onClick={logOut} activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="sign-out-alt" className="mr-3"/>
                        Выйти
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;
