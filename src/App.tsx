import React from 'react';
import { Login } from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Dashboard} from './Components/Dashboard/Dashboard';
import { User } from './Components/User/User';
import { UserDetails } from './Components/UserDetails/UserDetails';





function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login/>}/>
        <Route>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/userdetails" element={<UserDetails/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
     </div>
  );
}

export default App;
