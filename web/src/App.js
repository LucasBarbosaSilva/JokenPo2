import React, { Component } from 'react';
import NavBar from './components/Navbar';
import ImageButton from './components/ImageButton';
import './styles/global.css';

class App extends Component {

  state = {
    isDefaultImage: true
  }

  changeImageButton = (value) => {
    this.setState({ isDefaultImage: value })
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <div className="main-container">
          <ImageButton actualImage={this.state.isDefaultImage} changeImage={this.changeImageButton} />
        </div>
      </div>
    );
  }
}
export default App;
