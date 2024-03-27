import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { db } from '../../data/db';

const Group1Screen = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = () => {
      db.transaction(tx => {
        tx.executeSql(
          `SELECT * FROM assessmentsScores WHERE totalScore > 15`,
          [],
          (_, { rows }) => {
            setStudents(rows._array);
          },
          (_, error) => {
            console.error(error);
          }
        );
      });
    };

    fetchStudents();
  }, []);

  return (
    <View style={styles.container}>
      {students.length > 0 ? (
        <>
          <Text>Students with Total Score  15:</Text>
          {students.map(student => (
            <Text key={student.id}>{student.studentName}</Text>
          ))}
        </>
      ) : (
        <Text>No students with total score greater than 15.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Group1Screen;
