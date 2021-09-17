import Column from '../Column/Column.js';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import React from 'react';
import { settings } from '../../data/dataStore';
import styles from './List.scss';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  };

  static propTypes = {
    columns: PropTypes.array,
    description: PropTypes.node,
    image: PropTypes.string,
    title: PropTypes.node,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };

  addColumn(title) {
    this.setState((state) => ({
      columns: [
        ...state.columns,
        {
          key: state.columns.length
            ? state.columns[state.columns.length - 1].key + 1
            : 0,
          title,
          icon: 'list-alt',
          cards: [],
        },
      ],
    }));
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero image={this.props.image} titleText={this.props.title} />
        {ReactHtmlParser(this.props.description)}
        <div className={styles.columns}>
          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={(title) => this.addColumn(title)}
          />
        </div>
      </section>
    );
  }
}

export default List;
