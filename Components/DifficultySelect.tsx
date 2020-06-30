import React from 'react';
import { Text, View, Button } from 'react-native';
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
            <View style={{margin:5}}><Button title="Easy" onPress={() => props.setDifficultyLevel(Difficulty.Easy)}/></View>
            <View style={{margin:5}}><Button title="Medium" onPress={() => props.setDifficultyLevel(Difficulty.Medium)}/></View>
            <View style={{margin:5}}><Button title="Hard" onPress={() => props.setDifficultyLevel(Difficulty.Hard)}/></View>
        </View>
        </>
    )
}