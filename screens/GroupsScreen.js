import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

const GroupsScreen = () => {
    const groups = [
        { id: 1, title: 'Silver' },
        { id: 2, title: 'Bronze' },
        { id: 3, title: 'Gold' },
    ];

    const renderGroupCard = (group) => (
        <TouchableOpacity
            key={group.id}
            style={styles.groupCard}
            onPress={() => console.log(`Clicked on ${group.title}`)} // Handle click action
        >
            <Ionicons name="medal" size={24} color="black" style={styles.medalIcon} />
            <Text style={styles.groupTitle}>{group.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.groupCard}
            >
                <Ionicons name="medal" size={50} color="#FFD700" style={styles.medalIcon} />
                <Text style={styles.groupTitle}>Group 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.groupCard}
            >
                <Ionicons name="medal" size={50} color="#C0C0C0" style={styles.medalIcon} />
                <Text style={styles.groupTitle}>Group 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.groupCard}
            >
                <Ionicons name="medal" size={50} color="#CD7F32" style={styles.medalIcon} />
                <Text style={styles.groupTitle}>Group 3</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    groupCard: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    medalIcon: {
        marginRight: 10,
    },
    groupTitle: {
        fontSize: 18,
    },
});

export default GroupsScreen;
