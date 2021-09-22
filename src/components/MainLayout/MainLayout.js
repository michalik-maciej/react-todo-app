import PropTypes from 'prop-types';
import React from 'react';

import Header from '../Header/Header';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
