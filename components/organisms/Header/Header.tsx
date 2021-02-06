import React, { Component, useEffect, useState, FC } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Hamburger from "../../atoms/Hamburger";
import useNavStore from "../../../store/useNavStore";

const Header: FC = () => {
  const [width, setWidth] = useState(0);
  const [menuIsOpen, toggleMenu, updateWindowType] = useNavStore((store) => [
    store.menuIsOpen,
    store.toggleMenu,
    store.updateWindowType,
  ]);

  const getWindowSize = () => {
    var e = document.documentElement;
    var g = document.getElementsByTagName("body")[0];
    var w = window.innerWidth || e.clientWidth || g.clientWidth;
    var h = window.innerHeight || e.clientHeight || g.clientHeight;
    return { width: w, height: h };
  };
  useEffect(() => {
    const resizeEvent = () => {
      var size = getWindowSize();
      setWidth(size.width);
      updateWindowType(size.width);
    };
    resizeEvent();
    window.addEventListener("resize", resizeEvent);
  });

  const offset = -50;
  const duration = 500;
  return (
    <Wrapper color={"black"}>
      {width >= 640 ? (
        <div className="header-btns">
          <Link activeClass="active" to="top" spy={true} smooth={true} offset={offset} duration={duration}>
            Top
          </Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={offset} duration={duration}>
            Skills
          </Link>
          <Link activeClass="active" to="works" spy={true} smooth={true} offset={offset} duration={duration}>
            Works
          </Link>
          <Link activeClass="active" to="accounts" spy={true} smooth={true} offset={offset} duration={duration}>
            Accounts
          </Link>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={offset} duration={duration}>
            About Me
          </Link>
        </div>
      ) : (
        <>
          <Hamburger onClick={toggleMenu} isMenuOpen={menuIsOpen} />
          <div className={`menu-tree ${menuIsOpen ? "open" : "close"}`}>
            <ul className="menu-list">
              <li>
                <Link
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={duration}
                  onClick={() => toggleMenu()}
                >
                  Top
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={duration}
                  onClick={() => toggleMenu()}
                >
                  Skills
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  activeClass="active"
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={duration}
                  onClick={() => toggleMenu()}
                >
                  Works
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  activeClass="active"
                  to="accounts"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={duration}
                  onClick={() => toggleMenu()}
                >
                  Accounts
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={duration}
                  onClick={() => toggleMenu()}
                >
                  About Me
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </Wrapper>
  );
};

const headerHeight = 50;

const Wrapper = styled.header<{ color: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${headerHeight}px;
  background-color: ${(props) => props.color || "black"};
  color: #ffffff;
  z-index: 100;
  box-sizing: border-box;
  a {
    text-decoration: none;
    color: white;
  }

  & > .header-btns {
    display: flex;
    margin-left: 20px;

    & > a {
      line-height: ${headerHeight}px;
      display: block;
      padding: 0 20px;
      transition: all 0.5s;
      box-sizing: border-box;
      height: 50px;

      :hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
    & > .active {
      border-bottom: 4px solid #00adff;
    }
  }

  .menu-tree {
    color: black;
    width: 100%;
    background-color: rgba(34, 49, 52, 0.9);
    margin: 0;
    margin-top: 50px;
    position: absolute;
    top: 0;
    z-index: 10;
    box-sizing: border-box;
    transition: all 1s;
    overflow: hidden;

    .menu-list {
      margin: 0;
      padding: 0 40px;
      text-align: center;

      & > hr {
        margin: 0;
      }

      & > li {
        list-style-type: none;
        height: 40px;

        & > a {
          display: block;
          width: 100%;
          height: 40px;
          line-height: 40px;
          :hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  .open {
    max-height: 500px;
    transition: max-height 1s;
  }

  .close {
    max-height: 0;
    transition: max-height 0.7s;
  }
`;

export default Header;
