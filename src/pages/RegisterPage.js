import React, { useState } from 'react';
// import axiosInstance from './axios';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../axios';

const RegisterPage = () => {

  const history = useHistory();
	const initialFormData = Object.freeze({
		email: '',
		username: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`user/create/`, {
				email: formData.email,
				user_name: formData.username,
				password: formData.password,
			})
			.then((res) => {
				history.push('/login');
				console.log(res);
				console.log(res.data);
			});
	};



  return (
    <form>
      <h3>Sign Up</h3>
      <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" label="Username" id="username" className="form-control" placeholder="Username" onChange={handleChange} />
      </div>
      <div className="form-group">
          <label>Email address</label>
          <input type="email" name="email" label="Email" id="email" className="form-control" placeholder="Enter email" onChange={handleChange} />
      </div>
      <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" label="Password" id="password" className="form-control" placeholder="Enter password" onChange={handleChange}/>
      </div>
      <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit} >Sign Up</button>
      <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
      </p>
    </form>
  )
}

export default RegisterPage
