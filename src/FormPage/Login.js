import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [id, setId] = useState()
    const [idError, setIdError] = useState(false)
    const [password, setPassword] = useState()
    const [passwordError, setPasswordError] = useState(false)

    const enterId = (event) => {
       const idValue = event.target.value
       var atposition=idValue.indexOf("@");  
       var dotposition=idValue.lastIndexOf(".");  
       if (atposition<1 || dotposition<atposition+2 || dotposition+2>=idValue.length){ 
        setIdError(true)
       }
       else{
        setIdError(false)
       }
       setId(idValue)
    }

    const enteredPassword = (event) => {
       const passwordValue = event.target.value
       if (passwordValue.length<=10){
        setPasswordError(true)
       }
       else if (passwordValue.length>16){
        setPasswordError(true)
       }
       else{
        setPasswordError(false)
       }
      setPassword(passwordValue)
    }

    const submitForm = () => {
      if(password.length<=10){
        alert('Invalid Password')
    }
    
    else{
        alert('Form Submitted Succesfully')
    }
        
    }

    const submit = () => {
      if(id.length<=10){
      alert('Invalid Id')
      }
    }

  return (
    <>
    <Link className="xyz" to="/">Home</Link>
      
      <div className="login_page">
        <h1>Login</h1><br/>
        <form onSubmit={submitForm}>
          <input type="text" placeholder="Enter Id" onChange={enterId}/>{idError?<h4 className="invalid_style">Invalid Id</h4>:null}
          <br />
          <br />
         <input type="password" placeholder="EnterPassword" onChange={enteredPassword} /> {passwordError?<h4 className="invalid_style">Enterd password does't match password Policy</h4>:null}
          <br />
          <br />
          <button onClick={submit} className="login_page_submit_button">Login</button>
          
          <br />
          <br />
          <h3>If You Don't Have Account</h3>
          <Link to="../createlogin">Create Account</Link>
       
           
      
        </form>
      </div>
    </>
  );
};

export default Login;