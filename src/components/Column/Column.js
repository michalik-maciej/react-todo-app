import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  };

  static propTypes = {
    icon: PropTypes.string,
    cards: PropTypes.array,
    title: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    console.log(this.props);
    return (
      <section className={styles.component}>
        <h3 className={styles.title} title={this.props.title}>
          {this.props.title}
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
        </h3>
        {this.state.cards.map(({ key, ...cardProps }) => (
          <Card key={key} {...cardProps} />
        ))}
        <Creator
          text={settings.cardCreatorText}
          action={(title) => this.addCard(title)}
        />
      </section>
    );
  }

  addCard(title) {
    this.setState((state) => ({
      cards: [
        ...state.cards,
        {
          key: state.cards.length, //po co jest if jeśli state = [] to state.length=0?
          title,
        },
      ],
    }));
  }
}

export default Column;
