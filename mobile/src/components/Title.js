import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Title = ({names}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{names[0]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height: 40,
  },
  text: {
    fontSize: 20
  }
});

export default Title; 