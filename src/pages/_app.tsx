import Head from 'next/Head';
import '../style/Global.css'
import {ChalengesProvider, ChallengesContext} from '../context/ChallengesContext'
import { CountDownProvider } from '../context/CountDownContext';


function MyApp({ Component, pageProps }) {
    return (
        <Component {...pageProps}/>
     )
}

export default MyApp