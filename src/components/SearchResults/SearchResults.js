import PropTypes from 'prop-types';
import React from 'react';

import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import styles from './SearchResults.scss';

const SearchResults = (props) => {
  const { icon, cards, title } = props;
  console.log(props.cards);
  return (
    <section className={styles.component}>
      <h3 className={styles.title}>
        {title}
        <span className={styles.icon}>
          <Icon name={icon} />
        </span>
      </h3>      
      {cards.map((cardData) => (
        <Card key={cardData.id} {...cardData} />
      ))}
    </section>
  );
};

SearchResults.propTypes = {
  icon: PropTypes.string,
  cards: PropTypes.array,
  title: PropTypes.string,
};

SearchResults.defaultProps = {
  icon: 'microchip',
  title: 'search results',
};

export default SearchResults;
