import React, {Component} from 'react';
import Header from './Header';
import Article from './Article';

class App extends Component {

  render(){
    return(
      
      <div className="container">
      <Header/>
      <Article/>
  </div>
  
    )
  }
}

export default App;
