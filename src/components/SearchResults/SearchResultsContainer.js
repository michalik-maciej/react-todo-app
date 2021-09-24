import { connect } from 'react-redux';

import { getCardsForSearchResults } from '../../redux/cardsRedux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => {
  const searchPhrase = props.location.pathname.split('search/')[1];

  return {
    cards: getCardsForSearchResults(state, searchPhrase),
  };
};

export default connect(mapStateToProps)(SearchResults);
