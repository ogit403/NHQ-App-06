import { showMessage } from 'react-native-flash-message';
import { firebase, auth, database } from '../firebase'

const userModal =  {
    changePassword: async (oldPass, newPass, confirmPass, setCheckPass) => {
        if(newPass !== confirmPass) {
            showMessage({
                message: "Mật khẩu mới không giống nhau",
                type: "danger",
            });
        }
        else {
            var cred = firebase.auth.EmailAuthProvider.credential(auth.currentUser.email, oldPass);
        auth.currentUser.reauthenticateWithCredential(cred)
        .then(async () => {
            try {
                await auth.currentUser.updatePassword(newPass).then(() => {
                    console.log('thanh cong');
                    setCheckPass(true);
                })
                .catch(() => console.log('that bai'))
                // setCheckPass(true);
            } catch(err) {
                showMessage({
                    message: err.message,
                    type: "danger",
                });
            }
        })
        .catch(() => {
            showMessage({
                message: "Mật khẩu cũ không đúng",
                type: "danger",
            });
        })
        }
        
    },

    uploadImage: async ({nameFull, blob, setLoading, setImageUser}) => {
        // console.log('abc');
        var metadata = {
            contentType: 'image/jpeg'
          };
        var storageRef = firebase.storage().ref();
        var uploadTask = storageRef.child('images/' + nameFull).put(blob, metadata);
        // console.log(formData, nameFull)
        uploadTask.on('state_changed', // <or></or> 
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress);
                setLoading(true)
            }, 
            (error) => {}, 
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                auth.currentUser.updateProfile({
                    photoURL: downloadURL
                    })
                    .then(() => {
                        // console.log('thanh cong up anh', downloadURL)
                        setImageUser(downloadURL)
                        setLoading(false)
                    })
                    .catch((error) => {
                        console.log('loi', error)
                    });  
                });
            }
            );
    },
    connect: async (collectionName) => {
        var uid = auth.currentUser.uid;
        var name = auth.currentUser.displayName;
        var image = auth.currentUser.photoURL;
        var userStatusDatabaseRef = database.ref('/status/' + uid);
        var isOfflineForDatabase = {
            state: 'offline',
            last_changed: firebase.database.ServerValue.TIMESTAMP,
        };
        var isOnlineForDatabase = {
            state: 'online',
            last_changed: firebase.database.ServerValue.TIMESTAMP,
            room: collectionName,
            name,
            image,
        };
        database.ref('.info/connected').on('value', function(snapshot) {
            if (snapshot.val() == false) {
                return;
            };
            userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function() {
                userStatusDatabaseRef.set(isOnlineForDatabase);
            });
        });
    },
    disConnect: async () => {
        var uid = auth.currentUser.uid;
        var userStatusDatabaseRef = database.ref('/status/' + uid);
        userStatusDatabaseRef.remove();
        return;
    },
    listUserOnline: async (roomName, setData) => {
        var listUser = database.ref('status');
        listUser.on('value', (snapshot) => {
            let array = [];
            snapshot.forEach(user => {
                if(user.val().room === roomName && user.val().state === 'online') {
                    array = [...array, {
                        id: user.val().name.toString() + user.val().last_changed.toString(),
                        name: user.val().name,
                        img: user.val().image
                    }]
                }
            })
            setData(array)
            listUser.off('value')
        })
    }
}

export {
    userModal
}