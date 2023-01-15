import React from 'react'
import Homescreen from "../assets/home1.jpg";
import Design from "../assets/design.jpg"
import '../styles/Home.css'

function Home() {
    return (

        <div className='main'>
            <div>
                <img className='homescreen' src='https://img.freepik.com/free-photo/covid-recovery-center-female-doctor-holding-older-patient-s-hands_23-2148847832.jpg?w=2000'/>
            </div>

            <div className='main__content'>
                <div className='main__desc'>
                    <p>Electronic Health records</p>
                    <p>Securing Electronic health records using Blockchain and Web 3.0</p>
                </div>
                
            </div>

            

        </div>
    
    );
}

export default Home;