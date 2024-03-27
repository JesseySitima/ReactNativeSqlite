import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { db } from '../../data/db';
import { Table, Row } from 'react-native-table-component';
import databaaseImage from '../../assets/database.jpg'

const Standard1SampleB = () => {
  const [scores, setScores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const txResult = await new Promise((resolve, reject) => {
          db.transaction(tx => {
            tx.executeSql(
              'SELECT * FROM carAppScores WHERE standard = ? AND sample = ?;',
              ['Standard 2', 'Sample B'],
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

      {scores.length === 0 ? (

        <View style={styles.subContainer}>
          <Image source={databaaseImage} style={styles.image} />
          <Text style={styles.title}>No Data Available</Text>
        </View>
      ) : (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Search by name..."
            onChangeText={setSearchTerm}
            value={searchTerm}
          />
          <Table borderStyle={{ borderWidth: 1, borderColor: '#ccc' }}>
            <Row
              data={['#', 'Week', 'TeacherName', 'Student Name', 'Maina a Malembo', 'Maliwu', 'Maphatikizo', 'Mawu']}
              style={styles.head}
              textStyle={styles.text}
            />
            {
              scores.map((item, index) => (
                <Row
                  key={index}
                  data={[
                    index + 1,
                    item.weekKey,
                    item.teacherName,
                    item.studentName,
                    item.MainaAMalemboScore,
                    item.MaliwuScore,
                    item.MaphatikizoScore,
                    item.MawuScore,
                  ]}
                  style={{
                    ...styles.row,
                    ...(index % 2 && { backgroundColor: '#f2f2f2' }),
                  }}
                  textStyle={styles.text}
                />
              ))
            }
          </Table>
        </View>

      )}
    </View>
  );
};

export default Standard1SampleB

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
    
   
  },
  subContainer: {
    alignItems: 'center', 
    flex: 1, 
    alignContent: 'center',
    marginTop: '60%'
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold'
  },
  head: {
    backgroundColor: '#f1f8ff'
  },
  text: {
    margin: 6
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#FFF1C1'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    width: '50%',
    alignSelf: 'flex-end',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
})