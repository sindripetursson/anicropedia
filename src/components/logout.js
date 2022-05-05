import { ReactSession } from 'react-client-session';
 
export default function Logout(props) {
    ReactSession.set("uid", null);
    ReactSession.set("name", null);
    window.location = '/';
}