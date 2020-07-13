import React from 'react';

import { Container, Wrapper } from './styles';

/* Components */
import Main from '../Main';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        <Main />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;
