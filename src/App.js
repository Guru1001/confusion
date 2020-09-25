import React,{ useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes'

function App() {
  const [dishes] = useState(DISHES);
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes}/>
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
