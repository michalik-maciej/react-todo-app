import { connect } from 'react-redux';

import { createActionMoveCard } from '../../redux/cardsRedux';
import Home from './Home';

const mapStateToProps = (state) => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  moveCard: (payload) => dispatch(createActionMoveCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
