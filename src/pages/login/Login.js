import React from 'react';
import './Login.css';


const Login = () => {
  return (
    <div className='container'>
          <form>
        <h3>CONNECTION</h3>

        <label for="username">Id Admin</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label for="password">Mot De Passe</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>Log In</button>
       
    </form>
    </div>
  )
}



export default Login