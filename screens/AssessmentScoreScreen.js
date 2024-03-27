import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { db } from '../data/db';

const AssessmentScoreScreen = ({ route }) => {
  const { score, totalQuestions, standard, sample, weekKey, studentName, teacherName, sections, sectionKey } = route.params;
  const navigation = useNavigation();

  const nextButton = async () => {
    // Save the assessment score in the database
    await saveAssessmentScore();

    navigation.navigate('AssessmentSection', { standard, sample, weekKey, sections, studentName });
  };

  const sectionKeyToColumnName = {
    'Maina a Malembo': 'MainaAMalemboScore',
    'Maliwu': 'MaliwuScore',
    'Maphatikizo': 'MaphatikizoScore',
    'Mawu': 'MawuScore'
  };
  
  const columnName = sectionKeyToColumnName[sectionKey];

  const saveAssessmentScore = async () => {
    const columnName = sectionKeyToColumnName[sectionKey];
  
    db.transaction(
      tx => {
        tx.executeSql(
          `SELECT * FROM carAppScores
           WHERE 
             standard = ? 
             AND sample = ? 
             AND weekKey = ? 
             AND studentName = ?;`,
          [standard, sample, weekKey, studentName],
          (_, { rows }) => {
            if (rows.length > 0) {
              // Row exists, update it
              const updateStatement = `UPDATE carAppScores 
                                       SET 
                                         ${columnName} = IFNULL(${columnName}, 0) + ?,
                                         totalScore = IFNULL(totalScore, 0) + ?,
                                         totalQuestions = IFNULL(totalQuestions, 0) + ?
                                       WHERE 
                                         standard = ? 
                                         AND sample = ? 
                                         AND weekKey = ? 
                                         AND studentName = ?;`;
              tx.executeSql(
                updateStatement,
                [score, score, totalQuestions, standard, sample, weekKey, studentName],
                (_, result) => {
                  console.log('Assessment score updated successfully');
                },
                (_, error) => {
                  console.error('Failed to update assessment score', error);
                }
              );
            } else {
              // Row does not exist, insert a new row
              const insertStatement = `INSERT INTO carAppScores 
                                        (standard, sample, weekKey, studentName, teacherName, ${columnName}, totalScore, totalQuestions) 
                                        VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
              tx.executeSql(
                insertStatement,
                [standard, sample, weekKey, studentName, teacherName, score, score, totalQuestions],
                (_, result) => {
                  console.log('Assessment score saved successfully');
                },
                (_, error) => {
                  console.error('Failed to save assessment score', error);
                }
              );
            }
          },
          (_, error) => {
            console.error('Failed to check if row exists', error);
          }
        );
      },
      null,
      null
    );
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Total Score:</Text>
        <View style={styles.circle}>
        <Text style={styles.scoreText}>{score} / {totalQuestions}</Text>
        </View>
        
        
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.correctButton} onPress={() => nextButton()}>
          <Text style={styles.buttonText}>Next Section</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AssessmentScoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  scoreText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 20,
    marginBottom: 10,
  },
  percentage: {
    fontSize: 16,
    color: 'gray',
  },
  buttonContainer: {
    marginTop: 50,
  },
  correctButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
 
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    paddingEnd: 30,
    paddingStart: 30,
    fontSize: 24,
  },
});