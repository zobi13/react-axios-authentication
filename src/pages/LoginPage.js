import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  
  const history = useHistory();
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				history.push('/');
				//console.log(res);
				//console.log(res.data);
			});
	};


  return (
    <form>
      <h3>Sign In</h3>
      <div className="form-group">
          <label>Email</label>
          <input id="email" label="Email Address" name="email" className="form-control" placeholder="Enter email" onChange={handleChange}/>
      </div>
      <div className="form-group">
          <label>Password</label>
          <input type="password" id="password" label="Password" name="password" className="form-control" placeholder="Enter password" onChange={handleChange}/>
      </div>
      <div className="form-group">
          <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
      </div>
      <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
      <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
      </p>
    </form>
  )
}

export default LoginPage
