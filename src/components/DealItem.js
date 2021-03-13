import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet} from 'react-native';

import {priceDisplay} from '../util';
class DealItem extends Component {
  static propTypes = {
    deal: PropTypes.object.isRequired,
  };
  render() {
    const {deal} = this.props;
    return (
      <View style={styles.item}>
        <Image source={{uri: deal.media[0]}} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.footer}>
            <Text style={styles.cause}>{deal.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  item: {
    paddingHorizontal: 25,
    paddingTop: 20,
    borderStyle: 'solid',
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
});

export default DealItem;
