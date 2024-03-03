import { useState } from 'react';
import { signUp } from '../services/Auth/SignUp';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSignup = () => {
    signUp(email, password,
      (result) => {
        console.log('Signup successo:', result);
        navigate('/verify', { state: { email } });
      },
      (error) => {
        console.error('Signup fallito:', error);
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;