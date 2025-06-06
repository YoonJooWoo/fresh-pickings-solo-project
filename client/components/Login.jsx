import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // const apiSignup = 'http://localhost:8080/signup';

  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        console.log('Login successful');
        setIsAuthenticated(true);
        navigate('/seasonal');
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
          <button id='loginAccount' type='submit' onClick={handleLogin}>LogIn</button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;