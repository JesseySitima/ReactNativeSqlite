import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';



const QuizPage = ({ route }) => {
  const { standard, sample, weekKey, sectionKey, studentName, sections, items } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigation = useNavigation();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // End of quiz
      navigation.navigate('AsssessmentScore', { score, standard, sample, weekKey, sectionKey, studentName, sections });
    }
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Assessing {studentName} on {sectionKey} </Text>
      </View>
      
      <View style={styles.quizSection}>
      <Text style={styles.titleText}>{items[currentIndex]}</Text>
      </View>

      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.correctButton} onPress={() => handleAnswer(true)}>
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrongButton} onPress={() => handleAnswer(false)}>
            <Text>Wrong</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuizPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
headingContainer: {
    flex: 1,
},
  quizSection: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 50,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  correctButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
    width: '100%',
  },
  wrongButton: {
    marginTop: 20,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
});
