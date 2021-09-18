import Column from '../Column/ColumnContainer';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import React from 'react';
import { settings } from '../../data/dataStore';
import styles from './List.scss';
import ReactHtmlParser from 'react-html-parser';
//import Creator from '../Creator/CreatorContainer';

class List extends React.Component {
  static propTypes = {
    columns: PropTypes.array,
    description: PropTypes.node,
    image: PropTypes.string,
    title: PropTypes.node,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };

  render() {
    const {title, image, description, columns} = this.props; //destrukturyzacja

    return (
      <section className={styles.component}>
        <Hero image={image} titleText={title} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        {/* <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={(title) => this.addColumn(title)}
          />
        </div> */}
      </section>
    );
  }
}

export default List;
