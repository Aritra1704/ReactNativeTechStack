import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    // console.log(library);
    return <ListItem library={library} />;
  }
  render() {
    // console.log(this.props.libraries);
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library, index) => index.toString()}
      />
    );
  }
}

const mapStatetoProps = state => {
//   console.log(state.libraries);
  return {libraries: state.libraries};
};

export default connect(mapStatetoProps)(LibraryList);
