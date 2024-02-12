import React from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png";
import { signout } from "../../utils/icons";
import { menuItems } from "../../utils/menuItems";
import { Link } from "react-router-dom";

function Navigation({ active, setActive }) {
  const handleSignout = () => {
    // Implement signout logic here
    console.log("User signed out");
  };

  return (
    <NavStyled>
      {/* Your user profile section */}
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Test User</h2>
          <p>Money</p> {/* Changed p2 to p */}
        </div>
      </div>
      {/* Navigation menu */}
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? "active" : ""}
          >
            <Link to={item.link}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="bottom-nav">
        <button onClick={handleSignout}>{signout} Sign Out</button>{" "}
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.div`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
  .bottom-nav {
    margin-top: auto; /* Align at the bottom */
  }

  .bottom-nav button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 16px;
    padding: 10px;
    transition: all 0.3s ease;
  }

  .bottom-nav button:hover {
    color: #ff0000; /* Example color change on hover */
  }
`;
export default Navigation;
