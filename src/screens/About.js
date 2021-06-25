import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';

const About = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Ini About</Text>
      <View style={{marginTop: 10}}>
        <Button
          title="Ke Explore"
          onPress={() => navigation.navigate('Explore')}
        />
      </View>
      <View style={{marginTop: 10}}>
        <Button title="Kembali ke home" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default About;
