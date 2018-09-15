import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { ISlideArr } from '../interfaces';

interface IProps {
  data: ISlideArr;
}
export default class Slides extends Component<IProps> {
  public render() {
    return (
      <View>
        <Text>Slides</Text>
      </View>
    );
  }
}
