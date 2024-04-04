import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        console.log('Account created successfully');
        useNavigate('./seasonal');
      } else {
        console.log('Failed to create account');
      }
    } catch (error) {
      console.error('Error creating account: ', error);
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        console.log('Login successful');
        useNavigate('./seasonal');
      } else {
        console.error('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  return (
    <div className='login_outerbox'>
      <h4>Welcome!</h4>
      <div id='login_box'>
        {/* {error && <p>{error}</p>} */}
        <form>
          <div className='input-group'>
            <label>
                    Username:
              <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                    Password:
              <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>
          <button type='submit' onClick={handleCreateAccount}>Create Account</button>
          <button type='submit' onClick={handleLogin}>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;