import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  background: #000;
  /* min-height: calc(100vh - 6rem); */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  padding-top: 0.5rem;
  width: 100%;
  padding: 0 2.4rem;
`;

export const Text = styled.h2`
  font-size: 3.2rem;
  color: #fff;
`;

export const LogoContainer = styled.div`
  max-width: 40rem;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
