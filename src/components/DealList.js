import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {View, Text, StyleSheet, FlatList} from 'react-native';
import DealItem from './DealItem';

class DealList extends Component {
  static propTypes = {
    deals: PropTypes.array.isRequired,
  };
  render() {
    console.log(this.props.deals.map((deal) => deal.title));
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({item}) => <DealItem deal={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
    paddingTop: 50,
  },
});

export default DealList;
