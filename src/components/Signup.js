import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';


const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });
let name, value;
  const handleInputs = (e) =>{
    console.log(e);
    name=e.target.name;
    value =e.target.value;

    setUser({...user,[name]:value});
  }

  const PostData = async (e) =>{
      e.preventDefault();
      const{name, email, phone, work, password, cpassword} = user;

      const res = await fetch("/register",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          name, email, phone, work, password, cpassword
        })
      });

      const data = await res.json();

      if(data.status === 422 || !data){
        window.alert("Invalid registration");
        console.log("Invalid registration");
      }else{
        window.alert("Registration Successfull");
        console.log("Registration Successfull");

        history.push("/login");
      }

  }

  return (
    <>
      <section className = "signup">
          <div className="container mt-5">
              <div className="signup-content">
                  <div className = "signup form">
                    <h2 className="form-title">Sign up</h2>
                    <form method="POST" className="register-form" id = "register-form">
                    <div className="form-group pt-5 pb-5">
                        <label htmlFor="name">
                          <i class="zmdi zmdi-account-add"></i>
                          </label>
                          <input type = "text" name="name" id="name" autoComplete = 'off' 
                          value={user.name}
                          onChange ={handleInputs}
                          placeholder="Your Name"/>
                      </div>

                      <div className="form-group  pb-5">
                        <label htmlFor="email">
                          <i class="zmdi zmdi-email"></i>
                          </label>
                          <input type = "text" name="email" id="email" autoComplete = 'off' 
                          value={user.email}
                          onChange ={handleInputs}
                          placeholder="Your email"/>
                      </div>

                      <div className="form-group  pb-5">                        <label htmlFor="phone">
                          <i class="zmdi zmdi-phone"></i>
                          </label>
                          <input type = "text" name="phone" id="phone" autoComplete = 'off' 
                          value={user.phone}
                          onChange ={handleInputs}
                         placeholder="Your phone number"/>
                      </div>

                      <div className="form-group  pb-5">                        <label htmlFor="work">
                          <i class="zmdi zmdi-slideshow"></i>
                          </label>
                          <input type = "text" name="work" id="work" autoComplete = 'off' 
                          value={user.work}
                          onChange ={handleInputs}
                          placeholder="Your Profession"/>
                      </div>

                      <div className="form-group  pb-5">                        <label htmlFor="password">
                          <i class="zmdi zmdi-lock"></i>
                          </label>
                          <input type = "password" name="password" id="password" autoComplete = 'off' 
                          value={user.password}
                          onChange ={handleInputs}
                        placeholder="Give a password"/>
                      </div>

                      <div className="form-group  pb-5">                        <label htmlFor="cpassword">
                          <i class="zmdi zmdi-lock"></i>
                          </label>
                          <input type = "password" name="cpassword" id="cpassword" autoComplete = 'off'
                          value={user.cpassword}
                          onChange ={handleInputs}
                          placeholder="Confirm your password"/>
                      </div>

                      <div className="form-group form-button pb-5">
                        <input type="submit" name="signup" id="signup" className="form-submit" value="Sign Up!" onClick={PostData}/>                      
                        </div>
                    </form>
</div>
                    <div className="signup-image">
                      <NavLink to ="/login" className="signup-image-link">I have an Acount</NavLink>
                    </div>
                  
              </div>
          </div>
      </section>
    </>
  )
}

export default Signup