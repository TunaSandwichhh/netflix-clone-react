import {
  CognitoUserPool,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import CognitoConfig from "../CognitConfig";

const userPool = new CognitoUserPool({
  UserPoolId: CognitoConfig.UserPoolId,
  ClientId: CognitoConfig.ClientId,
});

export function signUp(email, password, onSuccess, onFailure) {
  const attributeList = [];

  const dataEmail = {
    Name: "email",
    Value: email,
  };

  const attributeEmail = new CognitoUserAttribute(dataEmail);
  attributeList.push(attributeEmail);

  userPool.signUp(email, password, attributeList, null, (err, result) => {
    if (err) {
      onFailure(err);
      return;
    }
    onSuccess(result);
  });
}
