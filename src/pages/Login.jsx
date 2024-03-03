import { useState } from "react";
import { signIn } from "../services/Auth/Login";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = () => {
    signIn(email, password,
      (result) => {
        console.log('Login successo:', result);
        navigate('/movies');
      },
      (error) => {
        console.error('Login fallito:', error);
      }
    );
  };

  return (
    <div>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;