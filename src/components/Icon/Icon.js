import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => <i className={`fas fa-${props.name}`} />;

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
