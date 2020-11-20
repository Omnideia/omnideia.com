import React from 'react';

import Logo from '../Logo';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Content>
        <Logo />
        <h2>Teste</h2>
      </S.Content>
    </S.Header>
  );
};

export default Header;
