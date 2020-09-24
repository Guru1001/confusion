import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

//import { Component } from 'react';
// class App extends Component{
//   render(){ 
//     return (
//       <div className="App">
//       </div>
//     );
//   }
// }

export default App;
