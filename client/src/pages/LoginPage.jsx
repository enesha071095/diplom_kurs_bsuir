import React,  {useState, useEffect, useContext} from 'react'
import LoginForm from './../components/Login/LoginForm'
import {AuthContext} from './../context'
import AuthService from './../API/AuthService'

const LoginPage = (props) => {

    const {isAuth, setIsAuth, setIsAdmin} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isFailImgMustShake, setIsFailImgMustShake] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();
 
        const authFetchUser = async () => {
          try {
            const response = await AuthService.athenticate(email, password);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem('user_id',response.data.user_id)
            localStorage.setItem('is_admin',response.data.is_admin.toString())
            localStorage.setItem('auth', 'true')
          
             setIsAdmin(response.data.is_admin) 
          
            setIsAuth(true)
          } catch (e) {
            setIsFailImgMustShake(true)
          }
        }
 
        authFetchUser()
 
      }
 

    return (
        <>
            <LoginForm handleSubmit={handleSubmit}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                isFailImgMustShake = {isFailImgMustShake}
                setIsFailImgMustShake = {setIsFailImgMustShake}
             />
        </>
    )
}

export  default LoginPage