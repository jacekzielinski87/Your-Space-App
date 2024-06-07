import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faPerson} from '@fortawesome/free-solid-svg-icons';


// src/RegistrationForm.js

import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-[url('src/assets/spaceBg.jpg')] h-screen flex justify-center items-center">
    <form className=" text-slate-500 bg-slate-100 w-1/3 h-1/3 text-1xl mt-24 rounded-xl p-12 " onSubmit={handleSubmit}>
      <div>
        <FontAwesomeIcon icon={faPerson} className='mr-4' />
        <label htmlFor="username">Username:</label>
        <input className='m-2'
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <FontAwesomeIcon icon ={faEnvelope} className='mr-4'/>
        <label htmlFor="email">Email:</label>
        <input className='m-2'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <FontAwesomeIcon icon={faLock} className='mr-4' /> 
        <label htmlFor="password">Password:</label>
        <input className='m-2'
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input className='m-2'
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button className='my-6' type="submit">Register</button>
    </form>
    </div>
  );
};

export default RegistrationForm;


/*function RegistrationForm() {
    return (
        <div className="bg-[url('src/assets/spaceBg.jpg')] h-screen flex justify-center items-center">
           <form className=" text-slate-500 bg-slate-100 w-1/3 h-1/3 pt-10 grid text-4xl mt-24 rounded-xl font-extra p-14 items-center">
            
            
            
            </form>
            <p className='text-slate-200 text-8xl w-1/2 p-6 text-center font-family-roboto'>CREATE YOUR OWN SPACE</p>
            
        </div>
        
        
    )
}

export default RegistrationForm;*/


