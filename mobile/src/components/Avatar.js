import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import pedra from "../images/pedra.png";
import lagarto from "../images/lagarto.png";
import papel from "../images/papel.png";
import spock from "../images/spock.png";
import tesoura from "../images/tesoura.png";

const Avatar = ({sizeIn, id}) =>{
    
   
    return(
        <View  >
            <TouchableOpacity style={style.container} >
                <Image source={} style={style.image, {height: sizeIn, width: sizeIn}}/>
            </TouchableOpacity>
        </View>
    );
}

export default Avatar;

const style = StyleSheet.create({
    container:{
        borderRadius: 50,
        backgroundColor: '#000',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        overflow: "hidden",
    },
    image:{
        
    }
});