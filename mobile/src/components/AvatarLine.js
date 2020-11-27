import React from "react";
import { StyleSheet, View } from "react-native";
import Avatar from "./Avatar";

const AvatarLine = ({ images, action }) =>{
  const avatarList = images.map((image, key) => {
    return(
      <View key={key}>
        <Avatar key={key} index={key} image={image} action={action} />
      </View>
    );
  });
  return(
    <View style={style.container}>
      { avatarList }
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 5
  }
});

export default AvatarLine;