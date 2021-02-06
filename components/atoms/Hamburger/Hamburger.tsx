import React from "react";
import styled from "styled-components";

interface IProps {
  isMenuOpen: boolean;
  onClick: Function;
}

const Hamburger = (props: IProps) => {
  const classes = props.isMenuOpen ? ["is_active"] : [];

  return (
    <HanburgerMenu
      className={classes.join(" ")}
      onClick={(e) => {
        e.preventDefault();
        props.onClick();
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </HanburgerMenu>
  );
};

export default Hamburger;

const HanburgerMenu = styled.a`
  display: block;
  transition: all 0.4s;
  box-sizing: border-box;
  position: absolute;
  top: 10px;
  right: 30px;
  width: 26px;
  height: 20px;
  margin: auto 0;

  :hover {
    cursor: pointer;
  }

  & span {
    display: inline-block;
    transition: all 0.4s;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    margin: 0 auto;

    &:nth-of-type(1) {
      top: 0;
    }

    &:nth-of-type(2) {
      top: 50%;
      transform: translate(0%, -50%);
    }

    &:nth-of-type(3) {
      bottom: 0;
    }
  }

  &::after {
    position: absolute;
    left: -2px;
    bottom: -17px;
    content: "MENU";
    display: block;
    width: 100%;
    color: #fff;
    font-size: 11px;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    transition: all 0s;
  }

  &.is_active {
    &::after {
      content: "CLOSE";
      left: -4px;
    }

    & span {
      &:nth-of-type(1) {
        width: 45%;
        -webkit-transform: translate3d(2px, 10px, 0) rotate(405deg);
        transform: translate3d(1.5px, 5.5px, 0) rotate(405deg);
      }

      &:nth-of-type(2) {
        -webkit-transform: translate3d(-1px, 0, 0) rotate(-45deg);
        transform: translate3d(-1px, 0, 0) rotate(-45deg);
      }

      &:nth-of-type(3) {
        width: 45%;
        -webkit-transform: translate3d(23px, -9px, 0) rotate(405deg);
        transform: translate3d(11.5px, -1px, 0) rotate(405deg);
      }
    }

    & .menu-list {
      display: block;
    }
  }
`;
