import React from "react";

import{ Footer, Blog, Features, Header, Possibility, WhatGPT3} from  './containers';
import {Article ,Brand, Cta, Feature, Navbar} from './components'


const App= ()=> {
  return (
    <div className="App">
      <div className="gradient__bd">
        <Navbar/>
        <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta />
        <Blog />
        <Footer />
    </div>
  );
}

export default App;
