import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function user({ navigation }) {
  console.tron.log(navigation.getParam('user'));
  return <View />;
}
