import PropTypes from 'prop-types';
import React from 'react';
import {withRouter} from 'react-router';

import { settings } from '../../data/dataStore';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import styles from './Search.scss';

class Search extends React.Component {

  state = {
    value: '',
    visibleButtons: false,
  };

  handleChange(event) {
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK() {
    this.props.history.push(`/search/${this.state.value}`);
  }

  render() {
    const { value } = this.state;
    const { icon } = settings.search;
    return (
      <div className={styles.component}>
        <input
          type="text"
          value={value}
          onChange={(event) => this.handleChange(event)}
        />
        <div className={styles.buttons}>
          <Button onClick={() => this.handleOK()}>
            <Icon name={icon} />
          </Button>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  history: PropTypes.object,  //Warning: propTypes was defined as an instance property on Search. Use a static property to define propTypes instead.
};

export default withRouter(Search);
