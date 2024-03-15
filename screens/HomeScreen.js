import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import assessmentImage from '../assets/assess.png'


const HomeScreen = () => {

  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('Assessment');
  }

  return (
    <View style={styles.container}>
      <Image
        source={assessmentImage}
        style={styles.image}
      />
      <Text style={styles.title}>Assessment and Remediation</Text>
      <Button title='Continue' onPress={handleContinue}/>
   
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 30,
    fontWeight: '400',
    marginVertical: 20
  }
})