import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationScreenProps } from 'react-navigation';

interface Props {}
export default class ReviewScreen extends Component<Props> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    title: 'Review Jobs',
    headerRight: <Button title="Settings" onPress={() => navigation.navigate('SettingsScreen')} />,
  });

  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}
