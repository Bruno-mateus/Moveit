import React from "react";
import { GetServerSideProps} from 'next';

import {  CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from '../style/pages/Home.module.css';

import Head from 'next/Head';
import { ChallengeBox } from "../components/ChallengeBox";
import { ChalengesProvider } from "../context/ChallengesContext";
import { CountDownProvider } from "../context/CountDownContext";
import { LevelUpModal } from "../components/LevelUpModal";

interface HomeProps{
    challengesCompleted:number
    currentExperience:number
    level:number
}


export default function Home(props) {
    return (  
<ChalengesProvider

level={props.level} 
currentExperience={props.currentExperience} 
challengesCompleted={props.challengesCompleted}>

    <div className={styles.container}>
  <Head>
    <title>Inicio | Moveit</title>
  </Head>
  
    <ExperienceBar />
    <CountDownProvider>
     <section className="">
        <div>
        <Profile />
        
<CompletedChallenges />

        <CountDown />
        </div>
       
        <div>
        <ChallengeBox />
        </div>
     </section>
     </CountDownProvider>
    </div>

</ChalengesProvider> )
}

export const getServerSideProps:GetServerSideProps = async (ctx)=>{
    const {currentExperience,level,challengesCompleted} = ctx.req.cookies;
    return{
        props:{
            challengesCompleted:Number(challengesCompleted),
            currentExperience:Number(currentExperience),
            level:Number(level),
            
        }
    }
}