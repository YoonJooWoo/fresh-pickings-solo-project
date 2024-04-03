import React, { useState } from 'react';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {

  };

  return (
    <div className='login_outerbox'>
      <h4>Welcome!</h4>
      <div id='login_box'>
        {/* {error && <p>{error}</p>} */}
        <form onSubmit={handleSubmit}>
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
          <button type='submit' disabled={isLoading}>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;