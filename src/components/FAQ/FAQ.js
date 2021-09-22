import PropTypes from 'prop-types';
import React from 'react';

import {faqData} from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const FAQ = () => {
  const {content, title, image} = faqData;
  return (
    <Container>
      <Hero image={image} titleText={title} />
      {content}
    </Container>
  );
};

FAQ.propTypes = {
  content: PropTypes.node,
  image: PropTypes.string,
  title: PropTypes.node,
};

export default FAQ;