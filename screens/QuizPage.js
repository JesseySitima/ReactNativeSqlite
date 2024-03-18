import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const QuizPage = ({ route }) => {
  const { type, data, standard, sample, weekKey } = route.params;
  const totalQuestions = data.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigation = useNavigation();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('AsssessmentScore', { score, totalQuestions, standard, sample, weekKey })
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.quarterContainer}>
      <Text style={styles.title}>{type === 'sounds' ? 'Sounds' : 'Letters'}:</Text>
    </View>
    <View style={styles.quarterContainer}>
      <Text style={styles.titleText}>{data[currentIndex]}</Text>
    </View>
    <View style={styles.quarterContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleAnswer(true)} style={styles.correctButton}>
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAnswer(false)} style={styles.wrongButton}>
          <Text style={styles.buttonText}>Wrong</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
};

export default QuizPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  quarterContainer: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 50,
  },
  buttonContainer: {
    marginTop: 20,
  },
  correctButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
    width: 200
  },
  wrongButton: {
    marginTop: 20,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 200
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
});
