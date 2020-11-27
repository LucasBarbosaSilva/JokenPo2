import React from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";

let width = Dimensions.get('window').width;

const Avatar = ({ image, index, action }) => {
  if(action) {
    return(
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={ styles.button } onPress={() => action(image, index)}>
          <Image style={styles.imageButton} source={image} />
        </TouchableOpacity>
      </View>
    );
  }

  else {
    return(
      <View style={styles.iconContainer}>
        <Image style={styles.imageIcon} source={image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: width * 0.15,
    width: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 80,
    borderWidth: 2,
  },
  imageButton: {
    borderRadius: 65,
    width:  width * 0.15,
    height: width * 0.15,
    resizeMode: 'cover',
  },
  iconContainer: {
    height: width * 0.22,
    width: width * 0.22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    borderWidth: 2,
  },
  imageIcon: {
    borderRadius: 75,
    width:  width * 0.21,
    height: width * 0.21,
    resizeMode: 'cover',
  }
});

export default Avatar;