/* eslint-disable react/no-unescaped-entities */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faPerson, faSquareCheck} from '@fortawesome/free-solid-svg-icons';




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
    <div className="bg-[url('src/assets/AwesomeBg.jpg')] h-screen items-center">
    <form className=" text-slate-100 w-2/4 h-1/2 text-2xl grid gap-6 mx-24 py-24" onSubmit={handleSubmit}>
      <div>
        <FontAwesomeIcon icon={faPerson} className='text-slate-100'/>
        <label className='m-2' htmlFor="username">Username:</label>
        <input className='w-1/3 rounded-xl flex' 
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <FontAwesomeIcon icon ={faEnvelope} />
        <label className='m-2' htmlFor="email">Email:</label>
        <input className='w-1/3 rounded-xl flex' 
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <FontAwesomeIcon icon={faLock}  /> 
        <label className='m-2' htmlFor="password">Password:</label>
        <input className='w-1/3 rounded-xl flex' 
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <FontAwesomeIcon icon={faSquareCheck} />
        <label className='m-2' htmlFor="confirmPassword">Confirm Password:</label>
        <input className='w-1/3 rounded-xl flex ' 
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <p className='text-2xl flex justify-end bg-red-500 rounded-lg w-1/3 h-12 p-2'>You don't have an account ?</p>
      <button className='text-2xl flex p-2 w-40 h-12 rounded-lg bg-green-600' type="submit"> Register now</button>
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


