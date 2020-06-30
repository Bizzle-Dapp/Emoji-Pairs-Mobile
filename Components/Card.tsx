import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import styles from '../Styles';

export interface CardProps {
    id?: number,
    emoji: string,
    isFlipped: boolean,
    isPaired: boolean,
    isSelected: boolean,
    selectCard: Function
}


const flippedAppearance = () => {
    return '❔'
}

export const Card: React.FC<CardProps> = (props) => {
    return (
        <View style={{margin:5}}>
        <>
        {props.isFlipped && 
            <>
            {props.isSelected && 
            /*className="Button App-card App-card-selected" */
                <TouchableOpacity style={styles.appCardSelected} onPress={() => props.selectCard(props)}>
                    <Text>{props.emoji}</Text>
                </TouchableOpacity> 
                    
            }
            {!props.isSelected &&
            /*className="Button App-card" */ 
                <TouchableOpacity style={styles.appCard} onPress={() => props.selectCard(props)}>
                    <Text>{props.emoji}</Text>
                </TouchableOpacity>
            }
            </>
        }
        {!props.isFlipped && !props.isPaired &&
            /*className="Button App-card" */
            <TouchableOpacity style={styles.appCard} onPress={() => {props.selectCard(props)}}>
                <Text>{flippedAppearance()}</Text>
            </TouchableOpacity>
        }
        </>
        </View>
    )
}

Card.defaultProps = {
    id: 0
}
