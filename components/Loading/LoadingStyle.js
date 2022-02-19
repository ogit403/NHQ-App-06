import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width - 150;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        zIndex: 1,
        width: '100%',
        height: '100%'
    },
    background: {
        position: 'absolute',
        opacity: 0.8,
        // backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
   
    main : {
    },
    loading: {
        width: 150,
        height: 150,
        // position: 'absolute',
        top: Height / 3,
        left: Width / 2,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 500,
        top: Height / 3 + 25,
        left: Width / 2 + 25,
        position: 'absolute'
    }
})

export default styles;