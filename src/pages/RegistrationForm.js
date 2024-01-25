import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const saveDataToStorage = () => {
    const newUser = { email, password };
    localStorage.setItem(newUser.email, newUser.password);
    navigate('/');
  };
  const userAlreadyExists = localStorage.getItem(email);
  if (userAlreadyExists) {
    alert('User already have an account!');
  }
  return (
    <div className='flex items-center justify-center flex-col'>
      <h2 className='text-blue-400 p-3 text-3xl font-bold '>Create account!</h2>
      <form>
        <div className='flex flex-col items-center justify-center '>
          <input
            className='border-[2px] border-blue-300 rounded-lg p-2 m-2'
            type='email'
            placeholder='Enter your email!'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className='border-[2px] border-blue-300 rounded-lg p-2 m-2'
            type='password'
            placeholder='Enter your password!'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className='border-[2px] border-blue-400 rounded-lg p-3 m-2 bg-blue-400'
            onClick={saveDataToStorage}
          >
            Sign up
          </button>
        </div>
      </form>
      <div>
        <p className='text-sm text-blue-300'>Already have an account?</p>
        <p className='text-blue-300 text-sm' onClick={() => navigate('/login')}>
          Sign in now
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
