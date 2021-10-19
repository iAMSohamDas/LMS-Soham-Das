import React, {useEffect,useState} from 'react'

const Contact = () => {

  const [userData,serUserData] = useState({name:"", email:"", phone:"", message:""});

  const userContact = async () => {
      try{
          const res = await fetch('/getdata',{
            method:"GET",
            headers:{
              "Content-Type":"application/json"
            },
          });

          const data = await res.json();
          console.log(data);
          serUserData({...userData,  name:data.name, email:data.email, phone:data.phone});

          if(!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }


      }catch(err){
            console.log(err);
      }
  }

  useEffect(() =>{
    userContact();
    // eslint-disable-next-line
  },[]);

  //storing data in the states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    serUserData({...userData, [name]:value})
  }
  

  //sending data to the backend
  const contactForm = async (e) => {
    e.preventDefault();

    const{name, email, phone, message} = userData;
    
    const res = await fetch('/contact', {
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      })
    });

    const data = await res.json();

    if(!data){
      console.log("message not sent!");
    }else{
      alert("message sent!");
      serUserData({...userData, message:""});
    }
  }







  return (
    <>
    <div className ="contact_info">
      <div className ="container_fuid">
      <div className ="row">
        <div className = "col-lg-10 offset-lg-1 d-flex justify-content-between">
          <div className="contact_info_item d-flex justify-content-start align-items-center pt-5">
            <img src="https://pic.onlinewebfonts.com/svg/img_503524.png" height="36px" length="36px" alt="phone"/>
            <div className="contact_info_content p-3">
              <div className="contact_info_title">
                Phone
              </div>
              <div className="contact_info_text">
                +91 8745 654 541
              </div>
            </div>
          </div>

          <div className="contact_info_item d-flex justify-content-start align-items-center pt-5">
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-email-1.png" height="36px" length="36px" alt="phone"/>
            <div className="contact_info_content p-3">
              <div className="contact_info_title">
                Email
              </div>
              <div className="contact_info_text">
                example@gmail.com
              </div>
            </div>
          </div>

          <div className="contact_info_item d-flex justify-content-start align-items-center pt-5">
            <img src="https://pic.onlinewebfonts.com/svg/img_288659.png" height="36px" length="36px" alt="phone"/>
            <div className="contact_info_content p-3">
              <div className="contact_info_title">
                Address
              </div>
              <div className="contact_info_text">
                Howrah,WB,India
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    </div>

    {/*contact us form*/}
    <div className = "contact_form">
      <div className = "container">
        <div className ="row">
        <div className ="col-lg-10 offset-lg-1">
        <div className ="contact_form_container py-5">
          <div className="Contact_form_title">Get in touch
          </div>
          <form method="POST" id = "contact_form">
            <div className="contact_form_name d-flex justify-content-between align-items-between">
              <input type="text" id="contact_form_name" className="contact_form_name input_field" name="name" value={userData.name} onChange={handleInputs}placeholder="Your Name" required="true"/>

              <input type="email" id="contact_form_email" className="contact_form_email input_field" name="email" value={userData.email} onChange={handleInputs} placeholder="Your Email" required="true"/>

              <input type="number" id="contact_form_phone" className="contact_form_phone input_field" name="phone" value={userData.phone} onChange={handleInputs} placeholder="Your Phone number" required="true"/>
            </div>

            <div className ="contact_form_text pt-4">
              <textarea className="text_field contact_form_message" name="message" value={userData.message} onChange={handleInputs} placeholder="Type here" cols="140" rows="10"></textarea>

              <div className="contact_form_button">
                <button type="submit" className="button contact_submit_button" onClick={contactForm}>Send Message</button>
              </div>

            </div>

          </form>
          </div>
          </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default Contact