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
        <View  >
            <TouchableOpacity  style={style.container} >
                <ImageBackground source={props.image} style={style.image, {height: props.sizeIn, width: props.sizeIn}}/>
            </TouchableOpacity>
        </View>
    );
}

// export default class Avatar extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             image: props.image,
//             sizeIn: props.sizeIn,
//             id: props.id
//         }
//     }
    
//     render(){
//         return(
//             <View  >
//                 <TouchableOpacity style={style.container} >
//                     <ImageBackground source={this.state.image} style={style.image, {height: this.state.sizeIn, width: this.state.sizeIn}}/>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

const style = StyleSheet.create({
    container:{
        borderRadius: 50,
        height: 50,
        width: 50,
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