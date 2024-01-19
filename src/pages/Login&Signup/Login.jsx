// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import FormInput from '../../components/FormInputs/Forminputs';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [loginError,setLoginError] = useState("")

  const navigate = useNavigate()

  axios.defaults.withCredentials = true
  const inputs = [
    {
        id: 1,
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        label: 'Email',
        required: true,
      },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      required: true,
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the server
      const response = await axios.post('http://localhost:3000/login',values);

      // Handle the response from the server if needed
      if(response.data === true){
        navigate("/")
      }else if(response.data.Error === "invalid password ya m3lm"){
        setLoginError("invalid password")
      }
      else if(response.data.Error === "User not Found"){
        setLoginError("invalid Email and Password")
      }else{
        setLoginError("invalid Email")
      }
 
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.log(error)
      setLoginError("server not responding.... try again later")
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setLoginError("")
    console.log(values)
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="shadow">
        <h1>Login</h1>
  {loginError&&      <div className="alert alert-danger" role="alert">
  {loginError}
</div>}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Sign In</button>
        <p>Don't have one !<Link to={"/signup"}> Register Now !</Link></p>
      </form>
    </div>
  );
};

export default Login;
