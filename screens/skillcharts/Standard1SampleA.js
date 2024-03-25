import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { db } from '../../data/db'

const Standard1SampleA = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const txResult = await new Promise((resolve, reject) => {
          db.transaction(tx => {
            tx.executeSql(
              'SELECT * FROM assessmentsScores;',
              [],
              (_, result) => resolve(result),
              (_, error) => reject(error)
            );
          });
        });
        const fetchedScores = txResult.rows._array;
        setScores(fetchedScores);
      } catch (error) {
        console.error('Failed to fetch scores', error);
      }
    };

    fetchScores();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Scores</Text>
      <FlatList
        data={scores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.scoreContainer}>
            <Text>Standard: {item.standard}</Text>
            <Text>Sample: {item.sample}</Text>
            <Text>Week: {item.weekKey}</Text>
            <Text>Student Name: {item.studentName}</Text>
            <Text>Maina a Malembo Score: {item.MainaAMalemboScore}</Text>
            <Text>Maliwu Score: {item.MaliwuScore}</Text>
            <Text>Maphatikizo Score: {item.MaphatikizoScore}</Text>
            <Text>Mawu Score: {item.MawuScore}</Text>
            <Text>Total Score: {item.totalScore}</Text>
            <Text>Total Questions: {item.totalQuestions}</Text>
          </View>
        )}
      />
    </View>
  );
};


export default Standard1SampleA

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scoreItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
})