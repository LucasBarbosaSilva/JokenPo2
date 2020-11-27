import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lucas Barbosa e Marcos Antônio</Text>
      <Text style={styles.subtitle}>514-A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    height: 80,
    marginTop: 10
  },
  title: {
    color: 'white',
    fontSize: '18%',
    fontWeight: "bold"
  },
  subtitle: {
    color: '#f7312b',
    fontSize: '18%',
    fontWeight: "bold",
    marginTop: 5
  }
});

export default Title; 