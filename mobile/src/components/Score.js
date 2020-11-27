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
  container: {
    alignItems: 'center',
    backgroundColor: '#4a3e86',
    borderWidth: 2,
    borderRadius: 45,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 2, 
    marginTop: 8
  },
  text: {
    color: '#ffffffe5',
    fontSize: 25,
    fontWeight: "bold"
  }
});

export default Score;