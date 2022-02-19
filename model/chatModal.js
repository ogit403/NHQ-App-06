import { showMessage } from 'react-native-flash-message';
import { firebase, auth, db } from '../firebase'

const chatModal =  {
    addData: async (params, collectionName) => {
        const {_id, createdAt, text, user} = params;

        db.collection(collectionName).add({
            _id,
            createdAt,
            text, 
            user
        })
        .then((docRef) => {
            // console.log(docRef)

        })
        .catch(() => {
            console.log('errrrrr')
        })
    },
    listData: async (collectionName, setMessages) => {
        const allChat = db.collection(collectionName).orderBy('createdAt', 'desc')
        .onSnapshot((querySnapshot) => setMessages(
            querySnapshot.docs.map(doc => ({
                _id: doc.data()._id,
                text: doc.data().text,
                createdAt: doc.data().createdAt.toDate(),
                user: doc.data().user
            }))
        ))
        return allChat;
    }
}

export {
    chatModal
}