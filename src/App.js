import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./component/Header";
import Home from './Home';
import Footer from './component/footer';



function App() {
   
  return (
   

    <Router>

      <Header/>
    <Routes>
        <Route exact path='/'  element={<Home />} />
    
    </Routes>
              <Footer/>

    </Router>

  );
}

export default App;