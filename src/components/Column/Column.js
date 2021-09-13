import React, { Children } from 'react'
import styles from './Column.scss'
import PropTypes from 'prop-types'

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
  }

  render () {
    return (
      <section className={styles.component}>
        <h3 className={styles.title} title={this.props.title}>
          {this.props.children}
        </h3>
      </section>
    )
  }
}

export default Column
