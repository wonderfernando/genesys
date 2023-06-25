 import Login from "./pages/Login/Login"
import Layout from "./pages/dashboard/Layout"
import {AuthContext} from "./Context/AuthContext"
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AuthRoutes from "./components/AuthRoutes"
 

function App() {
  
  return (
 
    <BrowserRouter>
     <AuthContext>
      <Routes>
          <Route path="/login" element={<Login/>} />
           <Route path="/*" element={<AuthRoutes> <Layout/> </AuthRoutes>} />
      </Routes>
       </AuthContext>
    </BrowserRouter>
    
  ) 
}

export default App
