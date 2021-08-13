import React, {useState, useEffect} from 'react';
import './App.css';
import fire from './firebase'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Table from './pages/Table/Table';
import Menu from './pages/Menu/Menu'


function App () {

  // LOGIN SECTION
  const [user, setUSer] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState (false);

  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  }

  const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin =() => {
    clearErrors();
    fire 
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;   
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire 
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;   
        }
      });
  }

  const handleLogOut = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user =>{
      if(user){
        clearInputs();
        setUSer(user);
      } else{
        setUSer("");
      }
    });
  };

  useEffect(() => {
    authListener();
  },[])


  return (
    <>
      <Router>
        <Switch>
          {/* <Route path="/" exact component={Home}/> */}
          <Route path="/table" exact component={Table}/>
        </Switch>
      </Router>
      <Home 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
         />
         <Table/>
         <Menu/>
        
    </>

  );
}

export default App;
