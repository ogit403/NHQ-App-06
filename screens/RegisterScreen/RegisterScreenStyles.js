import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    titleInput: {
        marginBottom: 5
    },
    iconInput: {
        position: 'absolute',
        right: 20,
        top: 5,
        textAlign: 'center'
    },
    wrapIcon: {
        alignItems: 'center',
        marginTop: -200
    },
    logo: {
        width: '70%',
        height: 300,
        resizeMode: 'contain'
    },
    wrapInput: {
        width: '100%'
    },
    background: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '38%',
        backgroundColor: 'pink',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
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
        marginTop: 20
    },
    titleInput: {
        marginBottom: 5
    },
    contentInput: {
        borderColor: 'gray',
        borderWidth: 2,
        paddingHorizontal: 30,
        borderRadius: 30
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