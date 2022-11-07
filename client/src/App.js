import React, { useState, useEffect } from 'react';
import AppRouter from './router/AppRouter';
import TopNavigation from './components/topNavigation';
import SideNavigation from './components/sideNavigation';
import Footer from './components/Footer';
import {AuthContext} from './context';

import { BrowserRouter as Router } from "react-router-dom";
import './assets/css/index.css';
import './assets/css/App.css';
import {MDBView, MDBMask, MDBAnimation, MDBRow, MDBContainer
} from "mdbreact";


const App = () =>  {

  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect( ()=> {
      setIsAuth(false)
    if(localStorage.getItem('auth'))
    {
      localStorage.getItem('is_admin')==='true' ? setIsAdmin(true) : setIsAdmin(false)
      setIsAuth(true)
    }
  }
  ,[])

  const logOut = ()=>{
    const logOutUser = async () => {
      try {
        localStorage.removeItem('token')
        localStorage.removeItem('auth')
        localStorage.removeItem('user_id')
        localStorage.removeItem('is_admin')
        setIsAuth(false)
      } catch (e) {
        console.log(e)
      }
    }
    logOutUser()
  }
 
    return (
      <AuthContext.Provider value={{
        isAdmin, setIsAdmin,
        isAuth,
        setIsAuth,
        currentUserId,
        setCurrentUserId
    }}>
      {  isAuth ? 
      <>
          <div className="flexible-content">
            { localStorage.getItem('is_admin')==='true' ? <TopNavigation logOut={logOut} /> : null}
            

            <SideNavigation logOut={logOut} />
            <main id="content" className="p-5">
            <AppRouter />
            </main>
            <Footer />
          </div>
      </>
      : 
      <div id="classicformpage">
          <MDBView>
             <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
            <AppRouter />
            </MDBContainer>
           </MDBMask>
        </MDBView>
        </div>
      }
        
        </AuthContext.Provider>
    )
  
}

export default App;
