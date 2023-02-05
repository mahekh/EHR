import React from 'react'
import styled from "styled-components";
import AddpatForm from './AddpatForm';
import Docprofile from './Docprofile';
import DoctorSidebar from './DoctorSidebar';
import Header from './Header';



function DoctorDash() {
    return ( 

        <>
        <div style={{display:'flex'}}>
            <DoctorSidebar/>
            <Header roles="Doctor"/>
            {/* <AddpatForm/> */}

            {/* <Docprofile/> */}
        </div>
        </>
     );

     
}

const Container = styled.div`
    display: flex;
    height: 96.5vh;
    background: linear-gradient(to bottom right, white 60%, #B8E2F2);
`;

export default DoctorDash;