import React from 'react';

import Header from '../Header';

import * as S from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <S.Main>{children}</S.Main>
    </S.Container>
  );
};

export default Layout;
