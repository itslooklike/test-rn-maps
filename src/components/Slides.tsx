import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components';

import { ISlideArr } from '../interfaces';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Root = styled.ScrollView`
  flex: 1;
`;

interface ISlideProps {
  bg: string;
}
const Slide = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: ${SCREEN_WIDTH}px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${(p: ISlideProps) => p.bg};
`;

const SlideText = styled.Text`
  color: #fff;
  font-size: 30px;
  text-align: center;
`;

interface IProps {
  data: ISlideArr;
  onCompleteHandler: () => void;
}
export default class Slides extends Component<IProps> {
  public render() {
    const { data, onCompleteHandler } = this.props;

    const rootOptions = {
      horizontal: true,
      pagingEnabled: true,
      showsHorizontalScrollIndicator: false,
      bounces: false,
    };

    return (
      <Root {...rootOptions}>
        {data.map((slide, idx) => (
          <Slide key={idx} bg={slide.color}>
            <SlideText>{slide.text}</SlideText>
            {idx === data.length - 1 && (
              <Button title="Onwards" raised onPress={onCompleteHandler} />
            )}
          </Slide>
        ))}
      </Root>
    );
  }
}
