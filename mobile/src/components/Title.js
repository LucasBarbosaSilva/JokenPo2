import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Title = ({names}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{names[0]} and {names[1]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height: 80,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});

export default Title; 