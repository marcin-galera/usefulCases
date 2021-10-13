import React from "react";
import styled from "styled-components";

const Modal = ({ myRef }) => {
  return (
    <StyledModalWrapper>
      <StyledModal ref={myRef}>Modal</StyledModal>
    </StyledModalWrapper>
  );
};

export default Modal;

const StyledModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 10;
  background-color: pink;
`;

const StyledModal = styled.div`
  height: 200px;
  width: 200px;
  background-color: gray;

  display: flex;
  justify-content: center;
  align-items: center;
`;
