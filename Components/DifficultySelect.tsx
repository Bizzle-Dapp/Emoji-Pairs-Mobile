import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import styles from '../Styles';

enum Difficulty {
    None,
    Easy,
    Medium,
    Hard
  }

export interface DifficultySelectProps {
    gameStarted?: boolean,
    selectedDifficulty: Difficulty,
    setDifficultyLevel: Function,
}

export const DifficultySelect: React.FC<DifficultySelectProps> = (props) => {

    return(
        <>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{margin:5}}>
            <TouchableOpacity style={styles.button} onPress={() => props.setDifficultyLevel(Difficulty.Easy)}>
                    <Text style={styles.buttonText}>Easy</Text>
                </TouchableOpacity> 
            </View>
            <View style={{margin:5}}>
            <TouchableOpacity style={styles.button} onPress={() => props.setDifficultyLevel(Difficulty.Medium)}>
                    <Text style={styles.buttonText}>Medium</Text>
                </TouchableOpacity> 
            </View>
            <View style={{margin:5}}>
                <TouchableOpacity style={styles.button} onPress={() => props.setDifficultyLevel(Difficulty.Hard)}>
                    <Text style={styles.buttonText}>Hard</Text>
                </TouchableOpacity> 
            </View>
        </View>
        </>
    )
}