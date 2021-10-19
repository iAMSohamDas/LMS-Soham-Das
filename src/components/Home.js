import React, {useState,useEffect} from 'react'

const Home = () => {
  const [userName,serUserName] = useState('');

  const userHomePage = async () => {
      try{
          const res = await fetch('/getdata',{
            method:"GET",
            headers:{
              "Content-Type":"application/json"
            },
          });

          const data = await res.json();
          console.log(data);
          serUserName(data.name);

      }catch(err){
            console.log(err);
      }
  }

  useEffect(() =>{
    userHomePage();
    // eslint-disable-next-line
  },[]);





  return (
    <>
    <div className ="home-page">
      <div className ="home-div d-flex flex-col justify-content-center ">
      <h1><p className = "pt-5">Welcome To Soham Learning {userName}</p></h1> 
      </div>
      </div>
    </>
  )
}

export default Home