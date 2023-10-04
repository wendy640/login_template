import React, { useState } from "react";
import './AuthContainer.scss'
import Login from './Login'
import Register from './Register';
import Reset from './Reset';
const AuthContainer = () => {
  //method 1
//   const [login, setLogin] = useState(true)
//   const [register, setRegister] = useState(false);
//   const [reset, setReset] = useState(false);

//   const handleRegister = ()=>{
//     setLogin(false)
//     setRegister(true)
//      setReset(false);
//   }
// const handleReset = ()=>{
//    setLogin(false);
//    setReset(true)
//     setRegister(false);
// }
// const handleLogin = () =>{
//   setRegister(false)
//   setLogin(true)
//   setReset(false);
// }

//method 2 using object state

const [auth, setAuth]=useState({
  login:true,
  reset:false,
  register:false
})
const handleRegister = ()=>{
setAuth({login:false,register:true,reset:false})
}
const handleReset =()=>{
  setAuth({login:false,register:false,reset:true})
}
const handleLogin = ()=>{
   setAuth({login:true,register:false,reset:false})
}
  return (
		<section className="--flex-center --100vh">
			<div className="container box">
				{auth.login&& <Login onRegister={handleRegister} onReset={handleReset} />}
				{auth.register && <Register onLogin={handleLogin} />}
				{auth.reset && <Reset onLoginReset={handleLogin} />}
			</div>
		</section>
	);
}
export default AuthContainer