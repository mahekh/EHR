import React from 'react'
import styled from "styled-components";
import DoctorSidebar from './DoctorSidebar';



function DoctorDash() {
    return ( 

        <>
        <div>
            <DoctorSidebar/>
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