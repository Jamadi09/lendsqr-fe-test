import * as React from 'react';
import { useState, useRef, ChangeEvent } from 'react';
import lendlogo from '../../Assets/lendsqr logo.png'
import lendimg from '../../Assets/lendImg.png'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import './Login.scss'
import { useNavigate } from 'react-router-dom';

export interface IAppProps {
 
}

export function Login (props: IAppProps){
  const email=useRef() as React.MutableRefObject<HTMLInputElement>
  const password1=useRef() as React.MutableRefObject<HTMLInputElement>
  const navigate=useNavigate();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false as any)
  );
  const users = [{ email: "abc@gmail.com", password: "abcde" }];

  const handleSubmit = (e : ChangeEvent<HTMLInputElement>)=>{
   e.preventDefault();
    const account = users.find((user) => user.email === email as any);
    if(email.current.value=="abc@gmail.com"&& password1.current.value=="abcde",account && account.password === password)
    localStorage.setItem("emailData", "abc@gmail.com")
    localStorage.setItem("passwordData", "abcde")
    localStorage.setItem("authenticated", true as any);
      navigate("/dashboard");
    
  }
const [visible, setVisible] = useState(true)
  const [password, setPassword] = useState("");
 
  return (
  
    <div className='container'>
      <form onSubmit={handleSubmit as any}>
        <div className='Box1'>
          <img src={lendlogo} alt="" className='img1' />
          <div className='img2'>
            <img src={lendimg} alt=""/></div>
          </div>
        <div className='Box2'>
          <h3>Welcome!</h3>
          <p>Enter details to login.</p>
          <input type="email" placeholder="Email" name='email' className="form-control" ref={email} />
          <input type={visible ? "text" : "password" } placeholder="Password" name='password' className="form-control" value={password}
          onChange={(e) => setPassword(e.target.value)} ref={password1} />
          <div onClick={()=>setVisible(!visible)} className='show'>
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined/>}
        </div>
          <span><a href="">FORGET PASSWORD?</a></span>
          <button type="submit" className="btn btn-primary">LOG IN</button>
        </div>
        
      </form>
   
    </div>
  );
}
