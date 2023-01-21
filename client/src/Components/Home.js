import React from 'react'
import '../styles/Home.css'
import '../styles/Navbar.css'
import logo from '../assets/logo.jpg';

function Home() {
    return (

      <>

      <body className='homepageback'>
        
      
        <div className='navbar'>
            <div className='navbar__header'>
                <img className='logo' src={logo} />
                <p>EHR APPLICATION</p>
            </div>

            <ul className='navbar__menu'>
                <li className='navbar__item'>
                    <a href="#">ADMIN</a>
                </li>
                <li className='navbar__item'>
                    <a href="#">DOCTOR</a>
                </li>
                <li className='navbar__item'>
                    <a href="#">PATIENT</a>
                </li>
            </ul>

        </div>
        
         <div className='main'>

            <div className='main__content'>
                <p>Making Health Care Better Together..</p>
            </div> 

            <div className='main__desc'>
            <p className='main__desc-quotes'> With the number of patients rising and the healthcare industry booming, 
                there is a pressing need to implement a secure and immutable solution. The primary focus of this project 
                is to use the novel technology of Blockchain to provide a decentralized tamper proof ledger which is secure and interoperable
            </p>
            </div>      

        </div>    
    </body>           
    </>   
 
    );
}

export default Home;