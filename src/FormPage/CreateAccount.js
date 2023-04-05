import { useState } from "react";
import { Link } from "react-router-dom";
const CreateAccount = () => {

  const [name, setName] = useState();
  const [nameError, setNameError] = useState(false);

  const [number, setNumber] = useState();
  const [numberError, setNumberError] = useState(false);

  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState(false);

  const [reEnterPassword, setReEnterPassword] = useState();
  const [reEnterPasswordError, setReEnterPasswordError] = useState(false);

  const nameInput = (event) => {
    const nameValue = event.target.value
    if(nameValue.length<=8){
      setNameError(true)
    }
    else{
      setNameError(false)
    }
    setName(nameValue)
  }

  const numberInput = (event) => {
    const numberValue = event.target.value
    if(numberValue.length<=9){
      setNumberError(true)
    }
    else{
      setNumberError(false)
    }
    setNumber(numberValue)
  }

  const passwordInput = (event) => {
    const passwordValue=event.target.value
    if(passwordValue.length>=8 && passwordValue.match('@')){
      setPasswordError(true)
    }
    else{
      setPasswordError(false)
    }
    setPassword(passwordValue)
  }

  const reEnterPasswordInput = (event) => {
    const reEnterPasswordValue = event.target.value
    if(reEnterPasswordValue!==password){
      setReEnterPasswordError(true)
    }
    else{
      setReEnterPasswordError(false)
    }
  }

  const submitForm = () => {
    if(name.length<=0){
      alert('Please Enter Data')
    }
    
    else{
      alert('Form Submitted Sucessfullyy')
    }
  }

  return (
    <>
    <Link className="xyz" to="/">Home</Link>

      <form onSubmit={submitForm} className="create_account_page">
        <h1>Create Account</h1>
        {
          nameError? <h6 className="invalid_style">Name Must be include more than 8 characters</h6>:null
        }
        <input
          type="text"
          className="create_account_page_input"
          placeholder="Enter Name"
          onChange={nameInput}
        />
        <br />
        <br />
        
        {
          numberError? <h6 className="invalid_style">Number must include 10 digit</h6>:null
        }
        <input type='number' onChange={numberInput} className="create_account_page_input" placeholder="Enter Mobile Number" />
        <br />
        <br />
        
        <input
          type="email"
          className="create_account_page_input"
          placeholder="Enter Email Id"
        />
        <br />
        <br />
        
        <input
          type="password"
          className="create_account_page_input"
          placeholder="Enter Password"
          onChange={passwordInput}
        />
        <br />
        <br />
        {
          passwordError? <input
          type="password"
          className="create_account_page_input"
          placeholder="Re-Enter Password"
          onChange={reEnterPasswordInput}
        />:<input
        disabled
          type="password"
          className="create_account_page_input"
          placeholder="Re-Enter Password"
        />
        }      
        {
          reEnterPasswordError?<h6 className="invalid_style">Password Doesn't Match</h6>:null
        }
        
        <br />
        <br />
        <input
          className="create_account_page_button"
          type="submit"
          placeholder="Submit"
        />
        <input
          className="create_account_page_button"
          type="reset"
          placeholder="Clear"
        />
      </form>
    </>
  );
};

export default CreateAccount;