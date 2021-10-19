import React, {useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password

      })
    });
    const data = res.json();

    if(res.status === 400 || !data ){
      window.alert("Invalid Credentials");
    }else{
      window.alert("Login is successfull");
      history.push("/");
    }

  }

  return (
    <>
      <section className = "signin">
          <div className="container mt-5">
              <div className="signin-content">
                <div className="signin-image">
                <NavLink to ="/signup" className="signup-image-link">Create an Account</NavLink>
                </div>
                  <div className = "signin form">
                    <h2 className="form-title">Sign in</h2>
                    <form method="POST" className="register-form" id = "register-form">

                      <div className="form-group  pb-5">
                        <label htmlFor="email">
                          <i class="zmdi zmdi-email"></i>
                          </label>
                          <input type = "text" name="email" id="email" autoComplete = 'off' 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email"/>
                      </div>

                      <div className="form-group  pb-5">                        <label htmlFor="password">
                          <i class="zmdi zmdi-lock"></i>
                          </label>
                          <input type = "password" name="password" id="password" autoComplete = 'off'  
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Give a password"/>
                      </div>

                      <div className="form-group form-button pb-5">
                        <input type="submit" name="signin" id="signin" className="form-submit" value="Log in!"
                        onClick={loginUser} 
                        />                      
                        </div>
                    </form>
</div>
                    
                  
              </div>
          </div>
      </section>


    </>
  )
}

export default Login