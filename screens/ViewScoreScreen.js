import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import db from '../data/db';

export default function ViewScoreScreen() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql('SELECT name, score FROM scores;', [], (_, { rows }) => {
                console.log("Rows:", rows);
                if (rows && rows.length > 0) {
                    let scoresArray = [];
                    for (let i = 0; i < rows.length; i++) {
                        scoresArray.push(rows.item(i));
                    }
                    setScores(scoresArray);
                }
            }, (tx, error) => {
                console.error("Error executing SQL:", error);
            });
        });
    }, []);

    return (
        <View style={styles.container}>
            {scores.length > 0 ? (
                scores.map((score, index) => (
                    <View key={index}>
                        <Text>Name: {score.name}</Text>
                        <Text>Score: {score.score}</Text>
                    </View>
                ))
            ) : (
                <Text>No scores available in the database.</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
