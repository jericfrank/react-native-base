import React, { Component } from 'react';
import { Container } from 'native-base';

import Content from '../../components/Content';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class AboutScreen extends Component {
  render() {
    return (
      <Container>
      	<Header title='About Screen' navigation={this.props.navigation}/>
        <Content contents={`This is About Section`}/>
        <Footer/>
      </Container>
    );
  }
}