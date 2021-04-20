import App from "next/app";
import firebase from "../firebase/firebase";
import {FirebaseContext} from "../firebase";
import useAutenticacion from "../hooks/useAutenticacion";


const MyApp = props => {
    const usuario = useAutenticacion();
    //console.log(usuario);

    const { Component, pageProps } = props;

    return (
        <FirebaseContext.Provider
            value={{
                firebase,
                usuario
            }}
        >
            <Component {...pageProps} />
        </FirebaseContext.Provider>
    )
}

export default MyApp;