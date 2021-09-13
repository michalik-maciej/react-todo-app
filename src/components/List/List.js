import React from 'react'
import styles from './List.scss'
import Hero from '../Hero/Hero.js'
import PropTypes from 'prop-types'
import Column from '../Column/Column.js'

class List extends React.Component {
  static propTypes = {
    bgImage: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  }

  render () {
    return (
      <section className={styles.component}>
        <Hero background={this.props.bgImage} titleText={this.props.title} />
        {this.props.children}
        <div className={styles.columns}>
          <Column title='firstColumn'>Ananas</Column>
          <Column title='secondColumn'>Banana</Column>
          <Column title='thirdColumn'>Pine</Column>
        </div>
      </section>
    )
  }
}

export default List
