import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
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
