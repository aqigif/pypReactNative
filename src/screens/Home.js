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

const Home = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    try {
      const data = await fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(data => data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View
      style={{
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Ini Home</Text>
      <View style={{marginTop: 10}}>
        <Button
          title="Ke Explore"
          onPress={() => navigation.navigate('Explore')}
        />
      </View>
      <View style={{marginTop: 10}}>
        <Button title="Ke About" onPress={() => navigation.navigate('About')} />
      </View>
    </View>
  );
};

export default Home;
