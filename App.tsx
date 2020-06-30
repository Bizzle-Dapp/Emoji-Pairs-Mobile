import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import { DifficultySelect } from './Components/DifficultySelect';
import { Game } from './Components/Game';


enum Difficulty {
  None,
  Easy,
  Medium,
  Hard
}

export default function App() {
  let spinningBannerOptions = ['🤩', '🤯', '🥳', '🤠', '🤪', '😴', '👻', '👽', '👾', '🤖', '💎', '🧜‍♂️', '🧙‍♂️', '🎵', '🎻', '🍊', '🍇', '🍰']

  const randomBanner = (symbolArray:Array<String>) => {
    let bannerSelection = symbolArray[Math.floor(Math.random() * symbolArray.length)];
    return bannerSelection;
  }

  const [difficultyLevel, setDifficultyLevel] = useState<Difficulty>(Difficulty.None);

  // useEffect(() => {
  //   console.log(`Difficulty Set To: ${difficultyLevel}`)
  // },[difficultyLevel]);

  return (
    <>
    <View style={styles.app}> 
      {/* App Header */}
      <View style={styles.appHeader}>
        <Text style={styles.appLogo}>{randomBanner(spinningBannerOptions)}</Text>
      </View>
      <View style={styles.appBody}>
        {difficultyLevel < 1 &&
            <DifficultySelect selectedDifficulty={difficultyLevel} setDifficultyLevel={setDifficultyLevel}/>
        }
        {difficultyLevel > 0 &&
            <Game selectedDifficulty={difficultyLevel} setDifficultyLevel={setDifficultyLevel} />

        }
      </View>
    </View>
    
    </>
  );
}


