import React, {useState} from 'react';
import './Entry_style.css';
import { Jumbotron } from 'react-bootstrap';
import "../../Components/Login/Login";
import { LoginForm } from '../../Components/Login/Login';
import { ResetPassword } from '../../Components/Reset_Password/Reset_Password';

export const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [frmLoad, setFrmLoad] = useState('Login');

  const handleOnChange = (e) => {
    const {name, value} = e.target

    switch(name){
      case"email":
        setEmail(value)
        break;
      case"password":
        setPassword(value)
        break;
      default:
        break;
    };
  };

  const handleOnResetSubmit = e => {
    e.preventDefault()

    if(!email) {
      return alert("Please enter email!");
    }
    //TODO call api to submit the form
    console.log(email);
  };

  const handleOnSubmit = e => {
    e.preventDefault()

    if(!email || !password) {
      return alert("Fill all details!");
    }
    //TODO call api to submit the form
    console.log(email, password);
  };

  const formSwitcher = frmtype => {
    setFrmLoad(frmtype);
  };

  return (
    <div className="entry_page bg-info">
      <Jumbotron className='Jumbo'>
        {frmLoad === 'Login' && <LoginForm 
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
        password={password}
        />}
        
        {frmLoad === 'Reset' && <ResetPassword 
        handleOnChange={handleOnChange}
        handleOnResetSubmit={handleOnResetSubmit}
        formSwitcher={formSwitcher}
        email={email}
        />}
      </Jumbotron>
    </div>
  );
};
