import React, { Component } from 'react';
import '../Component_Styles/loginform.css';

export default class extends Component {
  render() {
    return (
      <div className='login-container'>
        <div className='sign-in'>
          <h2>Sign In</h2>
          <h3>The Journey Is Never Ending</h3>
          <div className='sign-in-form'>
            <input className='login-input' type="email" placeholder='Email...' />
            <input className='login-input' type="password" placeholder='Password...' />
            <button className='acc-btn' id='log-in-btn'>Log In</button>
          </div>
          <button id='forgot-pwd-btn'>Forgot Password?</button>
        </div>
        <div className='sign-up'>
          <h2>Create Account</h2>
          <h3>The Journey Starts Here</h3>
          <div className='sign-up-form'>
            <input className='login-input' type="text" placeholder='Name...' />
            <input className='login-input' type="email" placeholder='Email...' />
            <br />
            <input className='login-input' type="password" placeholder='Password...' />
            <input className='login-input' type="password" placeholder='Password Confirmation' />
            <br />
            <button className='acc-btn' id='sign-up-btn'>Create Account</button>
          </div>
        </div>
      </div>
    )
  }
}