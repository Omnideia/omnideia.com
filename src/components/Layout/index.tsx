import React from 'react';

// import Header from '../Header';

import * as S from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <S.Container>
      {/* <Header /> */}
      <S.Main>
        <S.Text>In Progress...</S.Text>
        <S.LogoContainer>
          <S.Logo src="assets/logoExpand.png" />
        </S.LogoContainer>
        {children}
      </S.Main>
    </S.Container>
  );
};

export default Layout;
