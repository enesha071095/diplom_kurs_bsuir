import React,{useEffect} from 'react'

const AdminLoader = ()=>{

  useEffect(()=>{
       window.location.reload();
  },[])
  return (
    <>
    </>
  )
}

export default AdminLoader
