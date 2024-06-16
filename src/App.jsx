import Home from "./pages/Home";
import Works from "./pages/Works";
import Discover from "./pages/Discover";
import Profile from "./components/Profile";
import {Routes, Route, BrowserRouter} from 'react-router-dom';







function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="works" element = {<Works/>}/>
        <Route path="discover" element = {<Discover/>}/>
        <Route path="profile" element = {<Profile/>}/> 
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App;
