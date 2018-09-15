import React, { Component } from 'react';
import { Text, View } from 'react-native';

interface Props {}
export default class ReviewScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Review Jobs',
    headerRight: <Text>back</Text>,
  };

  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}
