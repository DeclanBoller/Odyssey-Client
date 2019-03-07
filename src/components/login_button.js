import React, { Component } from 'react';
import LoginForm from '../components/loginform';

class loginBtn extends Component {
  constructor() {
    super();

    this.state = {
      isShowing: false
    }
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.openModalHandler} style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid #470D9D',
          width: '150px',
          height: '30px',
          fontFamily: 'var(--main-font)',
          fontWeight: '300',
          fontSize: '1em',
          background: 'var(--purple-btn)',
          color: 'var(--text-secondary)',
          borderRadius: '25px',
        }}> Sign In / Sign Up </button>
        {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
        <LoginForm className="modal" show={this.state.isShowing} close={this.closeModalHandler}></LoginForm>
      </div>
    )
  }
};

export default loginBtn;