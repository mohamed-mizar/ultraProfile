import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Index from "./Components/Index";
import Contact from "./Components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        
        <BrowserRouter>
        
          <Navbar />
          <Route path='/' exact component={Index} />
          <Route path='/contact' component={Contact} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
