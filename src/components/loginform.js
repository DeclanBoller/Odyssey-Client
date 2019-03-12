import React from 'react';
import '../Component_Styles/loginform.css';


const LoginForm = (props) => {
  return (
    <div className='login-container' style={{
      transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    }}>
      <span className="close-modal-btn" onClick={props.close}>×</span>
      <div className='sign-in'>
        <h2>Sign In</h2>
        <h3>The Journey Is Never Ending</h3>
        <div className='sign-in-form'>

          <label htmlFor="Sign-in Email">Sign In Email</label>
          <input className='login-input' name='Sign-in Email' type="email" placeholder='Email...' />

          <label htmlFor="Sign-in Password">Sign In Password</label>
          <input className='login-input' name='Sign-in Password' type="password" placeholder='Password...' />

          <button className='acc-btn' id='log-in-btn'>Log In</button>
        </div>
        <button id='forgot-pwd-btn'>Forgot Password?</button>
      </div>
      <div className='sign-up'>
        <h2>Create Account</h2>
        <h3>The Journey Starts Here</h3>

        <div className='sign-up-form'>
          <label htmlFor="Sign-up Name">Sign Up Name</label>
          <input className='login-input' name='Sign-up Name' type="text" placeholder='Name...' />

          <label htmlFor="Sign-up Email">Sign Up Name</label>
          <input className='login-input' name='Sign-up Email' type="email" placeholder='Email...' />

          <br />

          <label htmlFor="Sign-up Password">Sign Up Password</label>
          <input className='login-input' name='Sign-up Password' type="password" placeholder='Password...' />

          <label htmlFor="Sign-up Password Confirmation">Sign Up Password Confirmation</label>
          <input className='login-input' name='Sign-up Password Confirm' type="password" placeholder='Password Confirmation' />

          <br />

          <button className='acc-btn' id='sign-up-btn'>Create Account</button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;