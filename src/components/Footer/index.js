import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';

export default class index extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer 2017</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}