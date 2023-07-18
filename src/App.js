
import './App.css';
import React from 'react'
import SignUp from './Components/SignUp';
import Login from './Components/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSuccess from './Components/LoginSuccess';


function App() {



 return(
<div>
<div>
<Router>
<Routes>
<Route path="/" element={<SignUp />} />
  <Route path='/SignUp'element={<SignUp/>}/>
<Route path='/Login'element={<Login/>}/>
<Route path='/LoginSuccess'element={<LoginSuccess/>}/>



</Routes>


</Router>

</div>


</div>

  )
  }

export default App;
