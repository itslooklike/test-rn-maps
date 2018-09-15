import React, { Component } from 'react';

import Slides from '../components/Slides';
import { ISlideArr } from '../interfaces';

const SLIDES_DATA: ISlideArr = [
  {
    text: 'Welcome to JobApp',
  },
  {
    text: 'Set yore location, then swipe away',
  },
];

export default class WelcomeScreen extends Component {
  public render() {
    return <Slides data={SLIDES_DATA} />;
  }
}
