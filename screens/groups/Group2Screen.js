import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { db } from '../../data/db';

const Group2Screen = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = () => {
            db.transaction(tx => {
                tx.executeSql(
                    `SELECT * FROM carAppScores WHERE totalScore >= 10 AND totalScore <= 15`,
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
            <Text style={styles.desc}>This Page shows students who got more than 50% and less than 75% on the Assessment.</Text>
            {students.length > 0 ? (
                <Table borderStyle={{ borderWidth: 1, borderColor: '#ccc' }}>
                <Row
                  data={['#', 'Student Name', 'Score']}
                  style={styles.head}
                  textStyle={styles.text}
                />
                {students.map((student, index) => (
                  <Row
                    key={student.id}
                    data={[index + 1, student.studentName, student.totalScore]}
                    style={styles.row}
                    textStyle={styles.text}
                  />
                ))}
              </Table>

            ) : (
                
                <Text style={styles.alertText}>No students available.</Text>
            )}
        </View>
    );
};

export default Group2Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    desc: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom:10
    },
    alertText: {
            marginTop: '80%',
            textAlign: 'center'
    },
    head: { 
        height: 40, 
        backgroundColor: '#f1f8ff' 
    },
    text: { 
        margin: 6 
    },
    row: { 
        height: 30, 
        backgroundColor: '#f9f9f9' 
    },
})