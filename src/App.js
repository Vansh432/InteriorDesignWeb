import { BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Service from './Pages/Service';
import Gallery from './Pages/Gallery';
import Contactus from './Pages/Contactus';
import Aboutus from './Pages/Aboutus';
import Topbar from './Component/Topbar'
import './App.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Responsive.css';
import Footer from './Component/Footer'
function App(){

  return<>
  <BrowserRouter>
  <Topbar/>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contactus" element={<Contactus/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
   </Routes>
   <Footer/>
  </BrowserRouter>
    
  </>
}

export default App;