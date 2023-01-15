import React from 'react'
import Homescreen from "../assets/home1.jpg";


function Home() {
    return (

        <div className='main'>
            <div>
                <img src={Homescreen}/>
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