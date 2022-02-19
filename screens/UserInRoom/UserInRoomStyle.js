import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const Height = Dimensions.get('window').height - 30;

const styles = StyleSheet.create({
   container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 15,
   },
   item: {
       height: Height / 7,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        // paddingVertical: 5,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
   },
   wrapImage: {
        width: '35%'
   },
   wrapInfo: {
    width: '65%',
    
   },
   image: {
    width: '70%',
    height: '70%',
    borderRadius: 1000
   },
   wrapOnline: {
    flexDirection: 'row',
    alignItems: 'center'
   },
   name: {
    fontSize: 20
   },
   online: {
        marginLeft: 10
   }
})

export default styles;