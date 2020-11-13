import React from "react";
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import pedra from "../images/pedra.png";
import lagarto from "../images/lagarto.png";
import papel from "../images/papel.png";
import spock from "../images/spock.png";
import tesoura from "../images/tesoura.png";

// const Avatar = ({sizeIn, path}) =>{
//     loadIcon(sel) {
    
//         switch(sel) {
//           case 1: return require('./src/img/fruta01.png');
//           case 2: return require('./src/img/fruta02.png');
//           case 3: return require('./src/img/fruta03.png');
//           case 4: return require('./src/img/fruta04.png');
//           default: return require('./src/img/padrao.png'); 
//         }
//       }
//     const Image = require(`${path}`)

//     return(
//         <View  >
//             <TouchableOpacity style={style.container} >
//                 <ImageBackground source={Image} style={style.image, {height: sizeIn, width: sizeIn}}/>
//                 {/* "../images/pedra.png" */}
//             </TouchableOpacity>
//         </View>
//     );
// }

//export default Avatar;

export default class Avatar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            path: props.id,
            sizeIn: props.sizeIn,
            id: props.id
        }
    }
    loadIcon(sel) {
        // return require(path);
        switch(sel) {
            case 1: return require('../images/pedra.png');
            case 2: return require('../images/lagarto.png');
            case 3: return require('../images/papel.png');
            case 4: return require('../images/tesoura.png');
            case 5: return require('../images/spock.png');
         }
    }
    render(){
        let img = Array();
        for(a=1; a<6; a++){ 
            img[a] = this.loadIcon(a);
          }
        return(
            <View  >
                <TouchableOpacity style={style.container} >
                    <ImageBackground source={img[this.state.id]} style={style.image, {height: this.state.sizeIn, width: this.state.sizeIn}}/>
                </TouchableOpacity>
            </View>
        );
    }
}

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