

import React from 'react'
import LoginForm from '../components/LoginForm';
import SubmitButton from '../components/SubmitButton'
import Link from 'next/link'

function login() {
  return (
    <div>
      <LoginForm/>
      <div><Link href="/registration"><SubmitButton/></Link></div>
      
    </div>
  )
}

export default login
