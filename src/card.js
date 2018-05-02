import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Footer, FooterTab, Item, Input, View, Fab } from 'native-base';
import { Image } from 'react-native';

export default class card extends Component {
  render() {
    return (
        <Content>
        <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: this.props.restaurant.thumb}} />
            <Body>
              <Text>{this.props.restaurant.name}</Text>
              <Text note>{this.props.restaurant.location.city}</Text>
            </Body>
          </Left>
          <Right>
            <Text>Rp.{this.props.restaurant.average_cost_for_two}</Text>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: this.props.restaurant.thumb}} style={{height: 300, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Icon name='home' />
            <Text>{this.props.restaurant.location.address}</Text>
          </Left>
        </CardItem>
      </Card>
      </Content>
    );
  }
}
