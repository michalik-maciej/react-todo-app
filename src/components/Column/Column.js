import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import styles from './Column.scss';

class Column extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    cards: PropTypes.array,
    title: PropTypes.string,
    addCard: PropTypes.func,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {icon, title, cards, addCard} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title} title={title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        <Creator
          text={settings.cardCreatorText}
          action={addCard}
        />
      </section>
    );
  }
}

export default Column;
