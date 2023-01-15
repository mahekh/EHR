import React from 'react'
import '../styles/Home.css'

function Home() {
    return (

        <div className='main'>
            <div>
                {/* <img className='homescreen' src='https://img.freepik.com/free-photo/covid-recovery-center-female-doctor-holding-older-patient-s-hands_23-2148847832.jpg?w=2000'/> */}
            </div>

            <div className='main__content'>
                <div className='main__desc'>
                    <p>Electronic Health records</p>
                    <p className='main__desc-quotes'>A technical framework for securing electronic health records on blockchain 
                            using the web 3.0 approach. With the number of patients rising and the healthcare industry booming, 
                            there is a pressing need to implement a secure and immutable solution. The primary focus of this project 
                            is to use the novel technology of Blockchain to provide a decentralized tamper proof ledger which is secure and interoperable
                    </p>
                </div>
                
            </div>

            

        </div>
    
    );
}

export default Home;