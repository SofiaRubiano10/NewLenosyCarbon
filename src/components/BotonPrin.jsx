import React from 'react'
// importacion estilos CSS
import '../utils/CSS/botonprin.css'
// importacion de links 
import {Link} from 'react-router-dom'

const Login = (props) =>{
    const{
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;
    
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input 
                    type="email" 
                    autoFocus 
                    required value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input 
                    type="password"
                    required 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <p className="errorMgs">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin} id="signin">SIGN IN</button>
                            <p>
                                ¿no tienes cuenta? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Sing Up</span>
                            </p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup} id="signin">Sign up</button>
                            <p>
                                Have an account? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )

}

export default Login;



