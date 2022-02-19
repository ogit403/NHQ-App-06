import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    background: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '40%',
        backgroundColor: 'pink',
        borderBottomRightRadius: 100
    },
    main: {
        // flex: 1,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    group: {
        alignItems: 'center'
    },
    groupInput: {
        width: '80%',
        marginTop: 20,
        position: 'relative'
    },
    titleInput: {
        marginBottom: 5
    },
    contentInput: {
        borderColor: 'gray',
        borderWidth: 2,
        paddingHorizontal: 15,
        borderRadius: 30
    },
    iconInput: {
        position: 'absolute',
        right: 20,
        top: 5,
        textAlign: 'center'
    },
    wrapInput: {
        width: '100%'
    },
    groupButton: {
        alignItems: 'center',
        marginTop: 30
    },
    button: {
        backgroundColor: 'pink',
        color: '#ffffff',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 50
    },
    groupText: {
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textRegister: {
        color: 'red',
        marginLeft: 5
    },

})

export default styles;