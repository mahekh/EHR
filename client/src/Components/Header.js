import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
export default function Navbar(props) {
  return (
    <Nav>
      <div className="title">
        <h1>Hi {props.roles},</h1>
        <h1>
          Welcome to <span>YOUR DASHBOARD</span>
        </h1>
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: black;
  .title {
    margin-left:30px;
    h1 {
      span {
        margin-left: 0.5rem;
        color: #4da598;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.2rem;
      }
    }
  }
      &::placeholder {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;