import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CognitoConfig from '../services/CognitConfig';
import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';

const Verify = () => {
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location.state)
    console.log(location.state.email)
    if (!location.state || !location.state.email) {
      navigate('/login');
      return;
    }
  }, []);

  const handleVerify = async () => {
    try {
      const { email } = location.state;

      const userPool = new CognitoUserPool({
        UserPoolId: CognitoConfig.UserPoolId,
        ClientId: CognitoConfig.ClientId,
      });

      const cognitoUser = new CognitoUser({
        Username: email,
        Pool: userPool,
      });

      await new Promise((resolve) => cognitoUser.confirmRegistration(code, true, (err, result) => {
        if (err) {
          throw err;
        }
        console.log('Verification successful:', result);
        resolve();
      }));

      navigate('/movies');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h1>Verify your account</h1>
      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        type="text"
        placeholder="Verification Code"
      />
      <button onClick={handleVerify}>Verify</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Verify;