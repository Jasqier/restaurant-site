import Header from "./Header.jsx"
import Body from "./Body.jsx";
import Leg from "./Leg.jsx"
import Where from "./Where.jsx"
import Contact from "./Contact.jsx"
import {Routes, Route} from "react-router-dom"

function App(){
  return(
    <div>
      <Header/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/whereweat" element={<Where/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      <Leg/>
    </div>
  );
}

export default App