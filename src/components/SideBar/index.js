import React, { Component } from 'react';
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from 'native-base';

import { SCREENS } from './constants';

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={SCREENS}
            renderRow={ ( data, index ) => {
              return (
                <ListItem
                  key={index}
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
