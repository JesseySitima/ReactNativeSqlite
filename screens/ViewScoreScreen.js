import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { db } from '../data/db';

export default function ViewScoreScreen() {
    const [assessmentScores, setAssessmentScores] = useState([]);

  useEffect(() => {
    const fetchAssessmentScores = async () => {
      db.transaction(
        tx => {
          tx.executeSql(
            'SELECT * FROM assessmentsScores;',
            [],
            (_, { rows }) => {
              setAssessmentScores(rows._array);
            },
            (_, error) => {
              console.error('Failed to fetch assessment scores', error);
            }
          );
        },
        null,
        null
      );
    };

    fetchAssessmentScores();
  }, []);

  const renderScoreItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Student Name: {item.studentName}</Text>
      <Text>Teacher Name: {item.teacherName}</Text>
      <Text>Standard: {item.standard}</Text>
      <Text>Sample: {item.sample}</Text>
      <Text>Week Key: {item.weekKey}</Text>
      <Text>Maina a Malembo Score: {item.MainaAMalemboScore}</Text>
      <Text>Maliwu Score: {item.MaliwuScore}</Text>
      <Text>Maphatikizo Score: {item.MaphatikizoScore}</Text>
      <Text>Mawu Score: {item.MawuScore}</Text>
      <Text>Total Score: {item.totalScore}</Text>
      <Text>Total Questions: {item.totalQuestions}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {assessmentScores.length > 0 ? (
        <FlatList
          data={assessmentScores}
          renderItem={renderScoreItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>No assessment scores found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});


