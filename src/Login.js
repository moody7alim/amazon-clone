import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const signIn = async function (e) {
    console.log('SIGN IN BUTTON CLICKED');
    e.preventDefault();

    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      navigate('/');
      console.log(res);
    }
    catch (err) {
      console.log(err);
    }
  };

  const register = async function (e) {
    console.log('REGISTER BUTTON CLCKED');
    e.preventDefault();
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      navigate('/');
      console.log(res);
    }
    catch (err) {
      console.log(err);
    }


    // firebase thing-y
  };


  return (
    <div className='login'>
      <Link to='/'>
        <img
          className="login__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form action="">

          <h5>Email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Passowrd</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button onClick={signIn} className='login__button' type='submit'>Sign in</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>


        <button onClick={register} className='form__register-button' type='submit'>Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;