import React from "react";
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// import pedra from "../images/pedra.png";
// import lagarto from "../images/lagarto.png";
// import papel from "../images/papel.png";
// import spock from "../images/spock.png";
// import tesoura from "../images/tesoura.png";

// const img = [pedra, lagarto, papel, spock, tesoura]

const Avatar = (props) => {
    return(
        <View style={style.container}>
            <TouchableOpacity onPress={() => props.action(props.index, props.image)}>
                <ImageBackground source={props.image} style={style.image, {height: props.sizeIn, width: props.sizeIn}}/>
            </TouchableOpacity>
        </View>
    );
}

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

export default Avatar;