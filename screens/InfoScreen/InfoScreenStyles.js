import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '45%',
        backgroundColor: 'pink',
        borderBottomRightRadius: 40
    },
    groupImage: {
        alignItems: 'center',
        marginTop: 50
    },
    iconImage: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 300
    },
    groupChange: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 30,
        alignItems: 'center'
    },
    textChange: {
        backgroundColor: '#000000',
        color: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20
    },
    iconInput: {
        position: 'absolute',
        right: 20,
        top: 7,
        textAlign: 'center'
    },
    wrapInput: {
        width: '100%'
    },
    iconLogOut: {
        marginLeft: 80
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
    titleImage: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10
    },
    contentInput: {
        borderColor: 'gray',
        borderWidth: 2,
        paddingHorizontal: 30,
        paddingVertical: 3,
        borderRadius: 30
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
    titlePassword: {
        fontWeight: 'bold',
        fontSize: 20
    },
    modal: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center'
    },
    wrapImage: {
        // justifyContent: 'ciconLogOutenter',
        // alignItems: 'center'
    },
    bar: {
        // position: 'absolute',
        // top: 50,
        // left: 50,
        // zIndex: 2
        bottom: 60,
        left: 0
    }
})

export default styles;