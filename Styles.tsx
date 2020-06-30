import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    
    app: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        flex: 1
    },

    appLogo: {
        fontSize: 40,
    },

    appHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        flex: 1
    },

    appBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        flex: 2
    },
    
    appCard: {
        backgroundColor: 'rgba(90,120,190,0.699)',
        borderColor: 'rgba(6, 51, 117, 0.699)',
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10,
        width: 50,
        height: 60,
        marginLeft: 5,
        marginRight: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
    },
    appCardSelected: {
        backgroundColor: 'rgba(140,120,90,0.699)',
        borderColor: 'rgba(51, 51, 117, 0.699)',
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        width: 50,
        height: 60,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
    },

    button: {
        backgroundColor: 'rgba(100,120,190,0.699)',
        borderColor: 'rgba(51, 51, 117, 0.699)',
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        width: 100,
        height: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        
    },
    buttonText: {
        textShadowColor: '#697eaf',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
        color: 'white',
        fontWeight: 'bold'
    }
});

export default styles;