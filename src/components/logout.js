import { ReactSession } from 'react-client-session';
import { getAuth, signOut } from "firebase/auth";
 
export default function Logout(props) {
    ReactSession.set("uid", null);
    ReactSession.set("name", null);
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
        console.error('Error logging user out: ', error);
    });
    window.location = '/';

    return (<div></div>);
}