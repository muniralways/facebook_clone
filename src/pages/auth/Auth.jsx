import { useState } from "react";
import Meta from "../../assets/components/Meta"
import Modal from "../../assets/components/modal/Modal";
import "./Auth.scss";
import {Link } from "react-router-dom";


const Auth = () => {
  
  const [modal, setModal] = useState(false);
  
  const preventdefult = () =>{
    setModal(true)
    event.preventDefault();
  }
  return (
   <>
  
   <Meta title="Facebook- login or signup"/>
   
   
   {modal && (
   <Modal hide={setModal}>
    <form className="sign-up-form">
      <div className="h-form">
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Surname" />
      </div>
      <input type="text" placeholder="Mobile number Or email address" />
      <input type="text" placeholder="New password" />
         </form>
   
    </Modal>
    )}
   
   <div className="fb-auth-area">
    <div className="fb-auth-container">
     <div className="fb-auth-left">

      <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
     <h2>Facebook helps you connect and share with the people in your life.</h2>
     </div>
     <div className="fb-auth-right">
       <div className="fb-auth-box">
        <form action="">
        <input type="text" placeholder="Email or phone number" />
        <input type="password" placeholder="Password" />
        <button className="btn1"> Log in</button>
       <Link>Forgotten password </Link>
       <div className="divider">

       </div>
       <button className="btn2" onClick = {() => preventdefult()}>Create New account</button>
        </form>
       </div>
       <p>
        <Link>Create a Page </Link>
        
         for a celebrity, brand or business.</p>
     </div>
    </div>
   </div>
  
   </>
  )
}

export default Auth
