import PropTypes from 'prop-types';
import React from 'react';

import { settings } from '../../data/dataStore';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import styles from './Column.scss';

const Column = (props) => {
  const { icon, title, cards, addCard } = props;
  return (
    <section className={styles.component}>
      <h3 className={styles.title} title={title}>
        {title}
        <span className={styles.icon}>
          <Icon name={icon} />
        </span>
      </h3>      
      {cards.map((cardData) => (
        <Card key={cardData.id} {...cardData} />
      ))}
      <Creator text={settings.cardCreatorText} action={addCard} />
    </section>
  );
};

Column.propTypes = {
  icon: PropTypes.string,
  id: PropTypes.string,
  cards: PropTypes.array,
  title: PropTypes.string,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;
