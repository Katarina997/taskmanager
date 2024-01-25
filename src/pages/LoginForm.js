import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLogInPassword] = useState('');
  const navigate = useNavigate();
  const storedPassword = localStorage.getItem(loginEmail);
  const handleSignIn = (e) => {
    e.preventDefault();
    if (storedPassword) {
      if (storedPassword === loginPassword) {
        navigate('/todo');
      } else {
        alert('Incorrect email or password!');
      }
    } else {
      alert('Incorrect email or password!');
    }
  };
  return (
    <div>
      <div className='flex items-center justify-center flex-col'>
        <h2 className='text-blue-400 p-3 text-3xl font-bold '>Sign in!</h2>
        <form onSubmit={handleSignIn}>
          <div className='flex flex-col items-center justify-center '>
            <input
              className='border-[2px] border-blue-300 rounded-lg p-2 m-2'
              type='text'
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder='Enter your email!'
            ></input>
            <input
              className='border-[2px] border-blue-300 rounded-lg p-2 m-2'
              type='password'
              value={loginPassword}
              onChange={(e) => setLogInPassword(e.target.value)}
              placeholder='Enter your password!'
            ></input>
            <button className='border-[2px] border-blue-400 rounded-lg p-3 m-2 bg-blue-400'>
              Sign in!
            </button>
          </div>
        </form>
        <div>
          <p className='text-sm text-blue-300'>Don't have an account?</p>
          <p className='text-blue-300 text-sm'>
            <Link to='/register'>Register now!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
