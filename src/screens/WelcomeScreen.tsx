import React, { Component } from 'react';
import { NavigationScreenProps } from 'react-navigation';

import Slides from '../components/Slides';
import { ISlideArr } from '../interfaces';

const SLIDES_DATA: ISlideArr = [
  {
    text: 'Welcome to JobApp',
    color: '#03A9F4',
  },
  {
    text: 'Use this to get a job',
    color: '#009688',
  },
  {
    text: 'Set yore location, then swipe away',
    color: '#03A9F4',
  },
];

export interface IProps extends NavigationScreenProps {}
export default class WelcomeScreen extends Component<IProps> {
  public onCompleteHandler = () => {
    this.props.navigation.navigate('AuthScreen');
  }

  public render() {
    return <Slides data={SLIDES_DATA} onCompleteHandler={this.onCompleteHandler} />;
  }
}
