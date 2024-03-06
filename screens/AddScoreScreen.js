import React, { useState } from "react";
import { Text, TextInput, Button, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import db from '../data/db';

export default function AddScoreScreen() {
    const navigation = useNavigation();
    const [name, setName]= useState('');
    const [score, setScore] = useState('');

    const handleSave = () => {
        console.log("Adding score:", name, score);
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO scores (name, score) VALUES (?, ?);', [name, score], (_, result) => {
                console.log("Insert result:", result);
            }, (_, error) => {
                console.error("Error inserting score:", error);
            });
        });
        setName('');
        setScore('');
    };
    

    return(
        <View>
            <Text>Name:</Text>
            <TextInput value={name} onChangeText={setName}/>
            <Text>Score</Text>
            <TextInput value={score} onChangeText={setScore} keyboardType="number-pad"/>
            <Button title="Save" onPress={handleSave}/>
            <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('ViewScores')}>
  <Text style={styles.buttonText}>Go to View</Text>
</TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    // Other styles...
  
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      alignSelf: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  