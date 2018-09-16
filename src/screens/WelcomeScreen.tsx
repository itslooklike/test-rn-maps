import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';

import Slides from '../components/Slides';
import { ISlideArr } from '../interfaces';
import { signUp, ISignUp } from '../store/ducks/auth';

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

interface IProps extends NavigationScreenProps {
  signUp: (token: string) => ISignUp;
}

class WelcomeScreen extends Component<IProps> {
  public onCompleteHandler = () => {
    this.props.navigation.navigate('AuthScreen');
  }

  public componentDidMount() {
    this.props.signUp('some token');
  }

  public render() {
    return <Slides data={SLIDES_DATA} onCompleteHandler={this.onCompleteHandler} />;
  }
}

export default connect(
  null,
  { signUp },
)(WelcomeScreen);
