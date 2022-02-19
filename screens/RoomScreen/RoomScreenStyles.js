import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width - 30;
const windowHeight = Dimensions.get('window').height - 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  group: {
    flex: 1,
    flexDirection: 'row'
  },
  item: {
    width: windowWidth / 2 ,
    height: windowHeight / 4,
    // backgroundColor: 'blue',
    paddingVertical: 20,

    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: '70%',
    borderRadius: 50000
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold'
  }

})

export default styles;