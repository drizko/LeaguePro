import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import style from './style.js';
import { getChampionImage } from '../../../lib';

export default class Champions extends Component {

  constructor(props) {
    super(props);

    this.state = {
      viewIdx: false
    }
  }

  _onCardPress = (idx) => {
    if (this.state.viewIdx === idx) {
      this.setState({ viewIdx: false });
      return;
    }

    this.setState({ viewIdx: idx});
  }

  render(){
    if(Array.isArray(this.props.champions)) return null;

    return (
      <View>
        {
          Object.keys(this.props.champions).map((item, idx) => {
            return (
              <TouchableOpacity key={idx} style={styles.card} onPress={() => (this._onCardPress(idx))}>
                <Image source={{uri: getChampionImage(this.props.champions[item].image.full)}} style={{width: 75, height: 75}}/>
                <Text>{item}</Text>
                { this.state.viewIdx === idx ?
                  <Text>
                    {this.props.champions[item].blurb}
                  </Text>
                  :
                  <Text/>
                }
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderWidth: 1
  },
});

// <Image source={{uri: getChampionImage(champions.Aatrox.image.full)}} style={{width: 75, height: 75}}/>
// <Text>
//  {champions.Aatrox.blurb}
// </Text>
