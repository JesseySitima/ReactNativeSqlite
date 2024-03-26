import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import assessmentImage from '../assets/assess1.png'


const HomeScreen = () => {

  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('Assessment');
  }

  return (
    <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>Continuos Assessment </Text>
      <Text style={styles.title}> and </Text>
      <Text style={styles.title}>Remediation</Text>
    </View>
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={handleContinue} style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});