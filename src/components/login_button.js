import React from 'react';

const loginBtn = () => {
  return (
    <div>
      <button style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #470D9D',
        width: '200px',
        height: '40px',
        fontFamily: 'var(--main-font)',
        fontWeight: '300',
        fontSize: '1em',
        background: 'var(--purple-btn)',
        color: 'var(--text-secondary)',
        borderRadius: '25px',
      }}>Sign In / Sign Up</button>
    </div>
  )
};

export default loginBtn;