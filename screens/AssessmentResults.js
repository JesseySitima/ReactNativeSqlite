import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { db } from '../data/db';

const AssessmentResults = () => {
    const [tableData, setTableData] = useState([]);
    const [tableHead, setTableHead] = useState([
        'ID',
        'Standard',
        'Sample',
        'Week Key',
        'Type',
        'Score',
        'Total Questions',
    ]);

    useEffect(() => {
        // Fetch all data from the database
        db.transaction(
            tx => {
                tx.executeSql(
                    'SELECT * FROM assessmentData',
                    [],
                    (_, { rows }) => {
                        const newData = [];
                        for (let i = 0; i < rows.length; i++) {
                            const rowData = rows.item(i);
                            newData.push([
                                rowData.id.toString(),
                                rowData.standard,
                                rowData.sample,
                                rowData.weekKey,
                                rowData.type,
                                rowData.score.toString(),
                                rowData.totalQuestions.toString(),
                            ]);
                        }
                        setTableData(newData);
                    },
                    (_, error) => console.error('Failed to fetch data:', error)
                );
            },
            error => console.error('Transaction error:', error)
        );
    }, []);

    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                {tableData.map((rowData, index) => (
                    <Row
                        key={index}
                        data={rowData}
                        style={[styles.row, index % 2 && { backgroundColor: '#f2f2f2' }]}
                        textStyle={styles.text}
                    />
                ))}
            </Table>
        </View>
    );
};


export default AssessmentResults

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {  backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
})