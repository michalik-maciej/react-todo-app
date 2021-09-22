import PropTypes from 'prop-types';
import React from 'react';

import { infoData } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Info = () => {
  const {image, content, title} = infoData;
  return (
    <Container>
      <Hero image={image} titleText={title} />
      <p>{content}</p>
    </Container>
  );
};

Info.propTypes = {
  content: PropTypes.node,
  image: PropTypes.string,
  title: PropTypes.node,
};

export default Info;
