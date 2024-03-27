import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>C A R</Text>
      <Text style={styles.titleText}>Continuous Assessment and Remediation</Text>
     
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 150,
    marginTop: 40
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'center'
  },
});

export default LandingScreen;
