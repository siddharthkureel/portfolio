import React from 'react';
import Header from "./components/navigation/Header";
import Home from "./components/home/index";
import Footer from './components/navigation/Footer';
const App = () => {
    return (
      <>
          <div className="main__wrapper">
            <Header/>
               <Home/>
            <Footer/>
          </div>
        </>
    )
}
export default App;
