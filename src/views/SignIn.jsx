
import React, { useState } from 'react';

const SignIn = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      setIsAuthenticated(true); 
      console.log('Usuário autenticado:', username); 
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <p>Clique no botão para navegar pelo menu</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
