import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const navigate = useNavigate()

  const onLogin = ()=>{
    navigate('/marvel',{
      replace : true
    })
  }

  return (
    <div className='container mt-5'>
      LoginPage
      <hr />

      <button 
      onClick={onLogin}
      className='btn btn-primary'>
          Login
      </button>
    </div>
  )
}

export default LoginPage
