import React, { Component } from 'react';
import { Content, Footer, Text } from 'native-base';

export default class index extends Component {
  render() {
  	const { contents } = this.props;

    return (
      <Content padder>
        <Text>
          {contents}
        </Text>
      </Content>
    );
  }
}