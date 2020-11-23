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
          <S.Logo
            src="assets/logoExpand.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </S.LogoContainer>
        {children}
      </S.Main>
    </S.Container>
  );
};

export default Layout;
