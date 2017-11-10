import React, { Component } from 'react';
import { Container } from 'native-base';

import Content from '../../components/Content';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
      	<Header title='Home Screen' navigation={this.props.navigation}/>
        <Content contents={`This is Home Section`}/>
        <Footer/>
      </Container>
    );
  }
}