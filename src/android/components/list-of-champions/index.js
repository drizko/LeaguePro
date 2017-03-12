/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import style from './style.js';
import Champions from './champions';
import { retrieveChampionList } from '../../../lib';

export default class ListOfChampions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      champions: []
    };
  }

  formatChampions = (champions) => {
    this.setState({ champions: champions });
  }

  componentWillMount() {
    fetch(retrieveChampionList('na'))
      .then(r => r.json())
      .then(response => {
        this.formatChampions(response.data);
      })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Champions champions={this.state.champions}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create(style);
