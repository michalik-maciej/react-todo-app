import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import Hero from '../Hero/Hero.js';
import styles from './List.scss';
import Container from '../Container/Container';

const List = (props) => {
  const { title, image, description, columns, addColumn } = props;
  return (
    <Container>
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
    </Container>
  );
};

List.propTypes = {
  columns: PropTypes.array,
  description: PropTypes.node,
  image: PropTypes.string,
  title: PropTypes.node,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: settings.defaultListDescription,
};

export default List;
