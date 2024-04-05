import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // const apiSignup = 'http://localhost:8080/signup';

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      // console.log('Response status:', response.status);
      // console.log('Response body:', await response.json());

      if (response.ok) {
        console.log('Account created successfully');
        setIsAuthenticated(true);
        navigate('/seasonal');
      } else {
        console.log('Failed to create account');
        
        navigate('/signup');
      }
    } catch (error) {
      console.error('Error creating account: ', error);
    }
  };
  

  return (
    <div className='login_outerbox'>
      <h4>Welcome!</h4>
      <div id='signup_box'>
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
          
        </form>
      </div>
    </div>
  );
};

export default Signup;