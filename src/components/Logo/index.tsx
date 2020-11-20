import React from 'react';

import * as S from './styles';

const Logo: React.FC = () => {
  return (
    <S.Container>
      <S.Logo src="/assets/logo.png" alt="Logo" width={500} height={500} />
    </S.Container>
  );
};

export default Logo;
