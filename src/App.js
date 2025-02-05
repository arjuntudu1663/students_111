import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import { useContext ,createContext, useState } from 'react';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';


const UserContext = createContext();

function App() { 
  
   const [status,setStatus] = useState(false)

  return (
    <div >
       <UserContext.Provider value={[status,setStatus]}>
       <Routes>
           
           <Route path = "/" element = {<Home/>} />
         

       </Routes>
       </UserContext.Provider>
    </div>
  );
}

export  {UserContext,App};

