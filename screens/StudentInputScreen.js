import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import jsonData from '../data/data.json'

const StudentInputScreen = ({ route }) => {
  const { standard, sample, weekKey, sections } = route.params;
  const navigation = useNavigation();
  const [studentName, setStudentName] = useState('');

  const handleInputChange = (text) => {
    setStudentName(text);
  };

  const handleSubmit = () => {
    if (!studentName.trim()) {
        Alert.alert('Error', 'Please enter a student name');
        return;
      }

    navigation.navigate('AssessmentSection', {
        standard,
        sample,
        weekKey,
        sections: jsonData[standard][sample][weekKey],
        studentName,
      });
      setStudentName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Student Name to Assess:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={studentName}
        placeholder="Enter student name"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#3b69ca'
    
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
  }
});

export default StudentInputScreen;
