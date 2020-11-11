import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Navbar from './src/components/Navbar';
import ImageButton from './src/components/ImageButton.js';
import AvatarLine from './src/components/AvatarLine';

class App extends Component {

  state = {
    isDefaultImage: true
  }

  changeImageButton = (value) => {
    this.setState({ isDefaultImage: value })
  }

  render() {
    return (
      <View>
        <StatusBar/>
        <Navbar />
        <View style={styles.container}>
          <ImageButton actualImage={this.state.isDefaultImage} changeImage={this.changeImageButton} />
        </View>
        <AvatarLine/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4a3e86',
    padding: 12
  },
});

export default App;