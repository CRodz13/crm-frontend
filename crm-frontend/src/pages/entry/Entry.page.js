import React, {useState} from 'react';

import { LoginForm } from '../../components/login/Login.comp'
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

import './entry.style.css';


export const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnChange = e => {
    const { name, value } = e.target;

    switch(name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
      break;

      default:
        break;
    }
  
  };

  const handleOnSubmit = e => {
    e.preventDefault()

    if(!email || !password) {
      return alert("Fill the form out!");
    }

    //TODO call api to submit the form
      console.log(email, password);
  };

  const handleOnResetSubmit = e => {
    e.preventDefault()

    if(!email || !password) {
      return alert("Please enter the email");
    }
    //TODO call api to submit the form
      console.log(email);
  };
  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
    <div className="entry-page bg-info">
        <div className="jumbotron form-box">
          {frmLoad === "login" && (
            <LoginForm 
            handleOnChange={handleOnChange} 
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
            />
          )}

          {frmLoad === "rest" && (
            <ResetPassword
            handleOnChange={handleOnChange} 
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            />
          )}
        </div>
    </div>
  );
};

