import React from 'react';
import LoginForm from './pages/LoginForm';
import RegistrationForm from './pages/RegistrationForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoWrapper from './components/TodoWrapper';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/todo' element={<TodoWrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
