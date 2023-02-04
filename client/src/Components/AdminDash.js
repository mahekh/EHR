import React from 'react'
import AdminSidebar from './AdminSidebar';
import Header from './Header';
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";



function AdminDash() {
    return ( 
<>
    <div style={{display:'flex'}}>
        <AdminSidebar/>
    <div className='main-container'>
    <Header/> 
    <Section className='section'>
      <div className="analytic ">
        <div className="content">
          <h5>Total number of Doctors</h5>
          <h2>5</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>

      <div className="analytic">
        <div className="logo">
          <IoStatsChart />
        </div>
        <div className="content">
          <h5>Total number of Patients</h5>
          <h2>10</h2>
        </div>
      </div>

      <div className="analytic">
        <div className="logo">
          <BiGroup />
        </div>
        <div className="content">
          <h5>New Users</h5>
          <h2>3</h2>
        </div>
      </div>

      <div className="analytic ">
        <div className="content">
          <h5>Total Users</h5>
          <h2>15</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
      </Section>
    </div>

        
    </div>

    
    
    </>
     );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top:30px;
  margin-left:30px;

  .analytic {
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    background-color:#4da598;
    height: 200px;
    width: 450px;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #323f52;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;


export default AdminDash;