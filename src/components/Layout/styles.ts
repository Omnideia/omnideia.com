import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  min-height: calc(100vh - 6rem);
  font-size: 1.6rem;
  padding-top: 0.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Text = styled.h2``;

export const LogoContainer = styled.div``;

export const Logo = styled(Image)``;
