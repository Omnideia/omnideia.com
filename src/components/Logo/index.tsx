import React from 'react';

import * as S from './styles';

const Logo: React.FC = () => {
  return (
    <S.Container>
      <S.Logo src="/assets/logo.png" alt="Logo" />
    </S.Container>
  );
};

export default Logo;
