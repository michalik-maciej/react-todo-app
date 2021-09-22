import PropTypes from 'prop-types';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import styles from './Card.scss';

const Card = (props) => {
  const { id, index, title } = props;
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <article
          className={styles.component}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {title}
        </article>
      )}
    </Draggable>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string,
};

export default Card;
