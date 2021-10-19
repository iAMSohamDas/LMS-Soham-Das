import React, {useEffect,useState} from 'react'
import dp from "../images/dp.png";
import aboutpic from "../images/about.png"
import {useHistory} from 'react-router-dom';

const About = () => {

  const history = useHistory();
  const [userData,serUserData] = useState({});

  const callAboutPage = async () => {
      try{
          const res = await fetch('/about',{
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            credentials:"include"
          });

          const data = await res.json();
          console.log(data);
          serUserData(data);

          if(!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }


      }catch(err){
            console.log(err);
            history.push('/login');
      }
  }

  useEffect(() =>{
    callAboutPage();
    // eslint-disable-next-line
  },[]);

  return (
    <>
     <div className = "container emp-profile">
       <form method="GET">
         <div className = "row">
           <div className = "col-md-4">   
              <img src={userData.name === "Soham Das" ? dp : aboutpic} alt="dp" />
           </div>

           <div className="col-md-6">
             <div className="profile-head">
               <h5>{userData.name}</h5>
               <h6>{userData.work}</h6>
               <p className="profile-rating mt-3 mb-5"> Ranking : <b>55</b></p>

               <ul className="nav nav-tabs" role="tablist">
               <li className="nav-item">
                 <a className="nav-link active" aria-current="page" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
               </li>
               <li className="nav-item">
               <a className="nav-link" aria-current="page" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
               </li>
             </ul>
             </div>
           </div>

           <div className = "col-md-2">
             <input type ="submit" className="profile-edit-btn" name="btnAddMore" value="Edit info"/>
           </div>
        </div>

        <div className ="row">
          {/*left side url*/}
          <div className ="col-md-4">
            <div className ="profile-work">
              <p>Work link</p>
              <a href ="https://www.linkedin.com/in/soham-das-674035220/" target="Soham">LinkedIn</a>
            </div>
          </div>

          {/*right side data toggle*/}
          <div className="col-md-8 pl-5 about-info">
              <div className = "tab-content profile-tab" id="myTabContent" > 
              </div>

              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row">
                  <div className="col-md-6">
                    <label>User ID</label>
                  </div>
                  <div className="col-md-6">
                    <p>874548476548</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.name}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.email}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.phone}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Proffesion</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.work}</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
       </form>
     </div>
    </>
  )
}

export default About