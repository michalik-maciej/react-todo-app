import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import Hero from '../Hero/Hero.js';
import styles from './List.scss';

class List extends React.Component {
  static propTypes = {
    columns: PropTypes.array,
    description: PropTypes.node,
    image: PropTypes.string,
    title: PropTypes.node,
    addColumn: PropTypes.func,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };

  render() {
    const { title, image, description, columns, addColumn } = this.props; //destrukturyzacja

    return (
      <section className={styles.component}>
        <Hero image={image} titleText={title} />
        <div className={styles.description}>{ReactHtmlParser(description)}</div>
        <div className={styles.columns}>
          {columns.map((columnData) => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn} />
        </div>
      </section>
    );
  }
}

export default List;
