import PropTypes from 'prop-types';
import React from 'react';

const Icon = (props) => <i className={`fas fa-${props.name}`} />;

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
