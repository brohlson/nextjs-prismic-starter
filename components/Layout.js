import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { GlobalStyle, RebootStyle } from '../style';
import Favicon from './Favicon';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Layout({ children, globalData }) {
  console.log('Server rendered global data for layout components', {
    globalData,
  });
  return (
    <Fragment>
      <RebootStyle />
      <GlobalStyle />
      <Favicon />
      <Wrapper>{children}</Wrapper>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  globalData: PropTypes.object,
};
