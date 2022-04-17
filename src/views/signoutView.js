import React from 'react';
import { ReactSession } from 'react-client-session';
 

export default function SignoutView(props) {
    ReactSession.set("uid", null);
    ReactSession.set("name", null);
    window.location = '/';
}