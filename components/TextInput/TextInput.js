import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
})

export default styles;