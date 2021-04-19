import React from "react";
import Header from "./Header";
import HomeList from "./HomeList";
import './../styles/App.css';

function App(){
  return (
    <React.Fragment>
      <Header />
      <div class="container">
        <HomeList />
      </div>
    </React.Fragment>
  );
}

export default App;