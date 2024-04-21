import { Form, useNavigate } from "react-router-dom"

import { auth, facebookProvider, githubProvider, googleProvider } from "@/config/firebase";
import { signInWithPopup } from "firebase/auth";

import { CiMail } from "react-icons/ci";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FormEvent, useState } from "react";
import { IoLogoGithub, IoLogoGoogle, IoLogoFacebook } from "react-icons/io";


const AuthForm: React.FC = () => {
  const [password, setPassword] = useState(true)
  const navigate = useNavigate()

  const handlePassword = () => {
    setPassword(status => !status)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    navigate('/')
  }

  const loginGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider)
    console.log(result);
    navigate('/')
    return result
  }
  const loginGithub = async () => {
    const result = await signInWithPopup(auth, githubProvider)
    console.log(result);
    navigate('/')
    return result
  }
  const loginFacebook = async () => {
    const result = await signInWithPopup(auth, facebookProvider)
    console.log(result);
    navigate('/')
    return result
  }

  return (
    <Form onSubmit={handleSubmit} className="auth-box_form">
      <h1 className="auth-box_form-title">
        Log in
      </h1>

      <p className="input-box">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" autoComplete="off" required/>
        <CiMail className="input-box_icon" />
      </p>
      <p className="input-box">
        <label htmlFor="image">Password</label>
        <input
          id="password"
          type={password ? 'password' : 'text'}
          name="password"
          autoComplete="off"
          required
        />
        {password ?
          <FaEyeSlash onClick={handlePassword} className="input-box_icon" /> :
          <FaEye onClick={handlePassword} className="input-box_icon" />
        }
      </p>

      <div className="auth-box_form-btn">
        <button className="btn">Login</button>
      </div>

      <div className="other-login">
        <p className="other-login_word">第三方登入</p>
        <div>
          <IoLogoGithub onClick={loginGithub} className="other-login_icon" />
          <IoLogoGoogle onClick={loginGoogle} className="other-login_icon" />
          <IoLogoFacebook onClick={loginFacebook} className="other-login_icon" />
        </div>
      </div>
    </Form>
  )
}


export default AuthForm