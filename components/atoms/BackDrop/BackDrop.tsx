import React, { Component } from "react";
import styled from "styled-components";

interface IProps {
  visible?: boolean;
  clickHandler?: () => void;
}

class BackDrop extends Component<IProps> {
  render() {
    return (
      <Wrapper
        visible={this.props.visible}
        onClick={() => {
          this.props.clickHandler && this.props.clickHandler();
        }}
      />
    );
  }
}

const Wrapper = styled.div<{ visible: boolean }>`
  z-index: 101;
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: rgba(96, 96, 96, ${(props) => (props.visible ? 0.33 : 0)});
`;

export default BackDrop;
