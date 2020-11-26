import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";

let width = Dimensions.get('window').width;

const Avatar = ({ image, index, action }) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={ styles.button } onPress={() => action(index, image )}>
        <Image style={styles.image} source={image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: width * 0.15,
    width: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 80,
    borderWidth: 2,
  },
  image: {
    borderRadius: 65,
    width:  width * 0.15,
    height: width * 0.15,
    resizeMode: 'cover'
  }
});

export default Avatar;