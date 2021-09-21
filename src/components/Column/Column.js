import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import { Droppable } from 'react-beautiful-dnd';

import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import styles from './Column.scss';

const Column = props => {
  const { icon, id, title, cards, addCard } = props;
  return (
    <section className={styles.component}>
      <h3 className={styles.title} title={title}>
        {title}
        <span className={styles.icon}>
          <Icon name={icon} />
        </span>
      </h3>
      <Droppable droppableId={id}>
        {provided => (
          <div className={styles.cards} {...provided.droppableProps} ref={provided.innerRef}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
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
