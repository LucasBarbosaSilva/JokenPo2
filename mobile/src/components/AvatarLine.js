import React from "react";
import { StyleSheet, View } from "react-native";
import Avatar from "./Avatar";

const array = [
  "../images/pedra.png",
  "../images/lagarto.png",
  "../images/papel.png",
  "../images/spock.png",
  "../images/tesoura.png"
]

const AvatarLine = () =>{
  let c = 0;
  return(
    <View style={style.container}>
      { 
        
        array.map((paths) => {
          c+=1
          return(
            <Avatar key={c} id={c} sizeIn={50} />
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