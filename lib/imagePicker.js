import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';
import { userModal } from '../model/userModal';

const imgPicker = async (setLoading, setImageUser) => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      
      // console.log(result)
      if (!result.cancelled) {
        const uri               = result.uri;
        const response = await fetch(uri);
         const blob = await response.blob();  

        const uploadUri         = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        let filename            = uploadUri?.substring(uploadUri.lastIndexOf('/') + 1)

        const extension         = filename.split('.').pop();
        const name              = filename.split('.').slice(0, -1).join('.');
        let nameFull          = name + Date.now() + '.' + extension;
        // console.log('nameFull', nameFull)
        userModal.uploadImage({nameFull, blob, setLoading, setImageUser})
      }
}

export default imgPicker