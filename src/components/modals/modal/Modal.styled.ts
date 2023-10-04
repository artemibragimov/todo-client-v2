import styled from 'styled-components';

export const ModalOwerlay = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  background: white;
  width: 40%;
  height: 40%;
  padding: 0;
  border-radius: 10px;
`;
