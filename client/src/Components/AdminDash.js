import React from 'react'
import styled from "styled-components";
import AdminSidebar from './AdminSidebar';

function Admin() {
    return ( 

    <div>
       <Container>
            <AdminSidebar/> 
       </Container>
    </div>
     );
}

const Container = styled.div`
    display: flex;
    height: 96.5vh;
    background: linear-gradient(to bottom right, white 60%, #B8E2F2);
`;
      
export default Admin;