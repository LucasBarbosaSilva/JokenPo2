import React from 'react';
import { Text, View , StyleSheet} from 'react-native';


const Score = ({ value }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 40,
    backgroundColor: '#4a3e86',
    borderWidth: 1,
    // borderBottomColor: '#1411223d',
    borderStyle: 'solid', 
    borderRadius: 45,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 30,
    width: 70,
  },

  text: {
    color: '#fff',
    fontSize: 25,
    // fontFamily: 'Ubuntu', sansserif
    textAlign: 'center',
    
    // marginblockstart: 0.0em,
    // marginblockend: 0.0em,
  }
});


export default Score;