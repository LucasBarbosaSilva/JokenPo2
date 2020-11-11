import React from "react";
import { StyleSheet, View } from "react-native";
import Avatar from "./Avatar";

const array = [0,1,2,3,4]

const AvatarLine = () =>{
    
  return(
    <View style={style.container}>
      {
        array.map(id => {
          return(
            <Avatar key={id} id={id}/>
          );
        })
      }
    </View>
  );
}

export default AvatarLine;

const style = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-around',
        alignItems: 'center'

    }
});