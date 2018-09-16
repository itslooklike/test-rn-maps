import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import styled from 'styled-components';
import { Provider } from 'react-redux';

import store from './src/store';

import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Root = styled.View`
  flex: 1;
`;

interface IProps {}
export default class App extends Component<IProps> {
  public render() {
    const MainNavigator = createBottomTabNavigator({
      WelcomeScreen: { screen: WelcomeScreen },
      AuthScreen: { screen: AuthScreen },
      MainScreen: {
        screen: createBottomTabNavigator({
          MapScreen: { screen: MapScreen },
          DeckScreen: { screen: DeckScreen },
          ReviewScreen: createStackNavigator({
            ReviewScreen: { screen: ReviewScreen },
            SettingsScreen: { screen: SettingsScreen },
          }),
        }),
      },
    });

    return (
      <Provider store={store}>
        <Root>
          <MainNavigator />
        </Root>
      </Provider>
    );
  }
}
