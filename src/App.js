import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './Components/Contacts'

class App extends React.Component {
  render() {
  return (
    <div className="row">
      <div className="col-md-8 offset md-8">
       <Contacts/>
      </div>
    </div>
  );
  }
}

export default App;
