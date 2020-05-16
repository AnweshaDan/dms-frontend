


import LoginForm from '../components/LoginForm';
import SubmitButton from '../components/SubmitButton'
import Link from 'next/link'

import React, { Component } from 'react'

export class login extends Component {
  render() {
    return (
      <div>
        <LoginForm/>
        <Link href='/registration'><SubmitButton/></Link>
      </div>
    )
  }
}

export default login
