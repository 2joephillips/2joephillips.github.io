import React, { ReactNode, FunctionComponent } from 'react';
import styled from 'styled-components';

import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';

interface IProps {
  children: ReactNode;
}

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`;

export const Layout: React.FC<IProps> = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <AppStyles>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyles>
  );
};
