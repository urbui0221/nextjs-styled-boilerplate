import adminSecrets from '../firebase-music-secrets.json';
import fireAdmin from 'firebase-admin';

export const verifyToken = token => {
    if(!fireAdmin.app.length){
        fireAdmin({
            credentials :  admin.credential.cert(adminSecrets),
        })
    }
}

return fireAdmin
        .auth()
        .verifyToken(token)
        .catch(err => {
            throw err;
        })