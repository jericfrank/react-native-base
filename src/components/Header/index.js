import React, { Component } from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

export default class index extends Component {
  render() {
    const { title } = this.props;

    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}