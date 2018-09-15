import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationScreenProps } from 'react-navigation';

interface IProps {}
export default class ReviewScreen extends Component<IProps> {
  public static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    title: 'Review Jobs',
    headerRight: (
      <Button
        title="Settings"
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0,122,255,1)"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    ),
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0,
    },
  })

  public render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}
