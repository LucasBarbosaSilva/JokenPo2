import React from 'react';
import { Text, View , StyleSheet} from 'react-native';


const Score = ({ value }) => {
  return(
    <View style={styles.container}>
      <Text>00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'gray'
  }
});

export default Score;