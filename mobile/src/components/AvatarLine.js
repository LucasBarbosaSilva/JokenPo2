import React from "react";
import { StyleSheet, View } from "react-native";
import Avatar from "./Avatar";


const AvatarLine = (props) =>{
  
  return(
    <View style={style.container}>
      { 
        props.images.map((image, key)=> {
          return(
            <Avatar key={key} index={key} action={props.action} image={image} sizeIn={50} />
          );
        })
      }
    </View>
  );
}

const style = StyleSheet.create({
  container:{
      display: 'flex',
      flexDirection: 'row',
      height: 80,
      justifyContent: 'space-around',
      alignItems: 'center'

  }
});

export default AvatarLine;

