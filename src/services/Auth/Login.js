import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import CognitoConfig from "../CognitConfig";

const userPool = new CognitoUserPool({
  UserPoolId: CognitoConfig.UserPoolId,
  ClientId: CognitoConfig.ClientId,
});

export const signIn = (email, password, onSuccess, onFailure) => {
  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  });

  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool,
  });

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (result) => {
      const token = result.getIdToken().getJwtToken();
      sessionStorage.setItem("userToken", token);

      onSuccess(result);
    },
    onFailure: (err) => onFailure(err),
  });
};
