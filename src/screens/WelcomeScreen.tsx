import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';

import Slides from '../components/Slides';
import { ISlideArr } from '../interfaces';
import { signIn, ISignIn } from '../store/ducks/auth';

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
  signIn: () => ISignIn;
}

class WelcomeScreen extends Component<IProps> {
  public onCompleteHandler = () => {
    this.props.navigation.navigate('AuthScreen');
  }

  public componentDidMount() {
    if (this.props.auth && this.props.auth.token) {
      this.moveToContent();
    } else {
      this.props.signIn();
    }
  }
  public componentDidUpdate() {
    this.moveToContent();
  }

  public moveToContent() {
    if (this.props.auth && this.props.auth.token) {
      this.props.navigation.navigate('MapScreen');
    }
  }

  public render() {
    return <Slides data={SLIDES_DATA} onCompleteHandler={this.onCompleteHandler} />;
  }
}

export default connect(
  (state) => ({
    auth: state.auth.data,
  }),
  { signIn },
)(WelcomeScreen);
